import { CSSProperties } from 'react';
import { getTextDimension, Margin, Dimension } from '@superset-ui/dimension';
import { AxisOrient } from 'encodable/lib/types/Axis';
import { ChannelDef } from 'encodable/lib/types/ChannelDef';
import { Value } from 'encodable/lib/types/VegaLite';
import ChannelEncoderAxis from 'encodable/lib/encoders/ChannelEncoderAxis';

export interface AxisLayout {
  axisWidth: number;
  labelAngle: number;
  labelFlush: number | boolean;
  labelOffset: number;
  labelOverlap: 'flat' | 'rotate';
  minMargin: Partial<Margin>;
  orient: AxisOrient;
  tickLabelDimensions: Dimension[];
  tickLabels: string[];
  tickTextAnchor?: string;
}

export default function computeAxisLayout<Def extends ChannelDef<Output>, Output extends Value>(
  axis: ChannelEncoderAxis<Def, Output>,
  {
    axisTitleHeight = 20,
    axisWidth,
    gapBetweenAxisLabelAndBorder = 4,
    gapBetweenTickAndTickLabel = 4,
    labelAngle = axis.config.labelAngle,
    tickSize = 8,
    tickTextStyle = {},
  }: {
    axisTitleHeight?: number;
    axisWidth: number;
    gapBetweenAxisLabelAndBorder?: number;
    gapBetweenTickAndTickLabel?: number;
    labelAngle?: number;
    tickSize?: number;
    tickTextStyle?: CSSProperties;
  },
): AxisLayout {
  const tickLabels = axis.getTickLabels();

  const tickLabelDimensions = tickLabels.map((text: string) =>
    getTextDimension({
      style: tickTextStyle,
      text,
    }),
  );

  const { labelOverlap, labelPadding, orient } = axis.config;

  const maxWidth = Math.max(...tickLabelDimensions.map(d => d.width), 0);

  // cheap heuristic, can improve
  const widthPerTick = axisWidth / tickLabels.length;
  const strategyForLabelOverlap =
    maxWidth <= widthPerTick ? labelOverlap : ({ strategy: 'flat' } as const);

  const spaceForAxisTitle = axis.hasTitle() ? labelPadding + axisTitleHeight : 0;
  let tickTextAnchor;
  let labelOffset: number = 0;
  let requiredMargin =
    tickSize + gapBetweenTickAndTickLabel + spaceForAxisTitle + gapBetweenAxisLabelAndBorder;

  if (axis.channelEncoder.isX()) {
    if (strategyForLabelOverlap.strategy === 'flat') {
      const labelHeight = tickLabelDimensions.length > 0 ? tickLabelDimensions[0].height : 0;
      labelOffset = labelHeight + labelPadding;
      requiredMargin += labelHeight;
    } else if (strategyForLabelOverlap.strategy === 'rotate') {
      const labelHeight = Math.ceil(Math.abs(maxWidth * Math.sin((labelAngle * Math.PI) / 180)));
      labelOffset = labelHeight + labelPadding;
      requiredMargin += labelHeight;
      tickTextAnchor =
        (orient === 'top' && labelAngle > 0) || (orient === 'bottom' && labelAngle < 0)
          ? 'end'
          : 'start';
    }
    requiredMargin += 8;
  } else {
    labelOffset = maxWidth + spaceForAxisTitle;
    requiredMargin += maxWidth;
  }

  return {
    axisWidth,
    labelAngle: strategyForLabelOverlap.strategy === 'flat' ? 0 : labelAngle,
    labelFlush: axis.config.labelFlush,
    labelOffset,
    labelOverlap: strategyForLabelOverlap.strategy,
    minMargin: {
      [orient]: Math.ceil(requiredMargin),
    },
    orient,
    tickLabelDimensions,
    tickLabels,
    tickTextAnchor,
  };
}
