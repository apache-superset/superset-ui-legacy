import { CSSProperties } from 'react';
import { EncodingConfig } from 'encodable/lib/types/Encoding';
import { LegendGroupInformation, LegendItemInformation } from 'encodable/lib/types/Legend';

// export type LegendItemInfo<Config extends EncodingConfig> = {
//   field: string;
//   value: ChannelInput;
//   encodedValues: Partial<Record<keyof Encoding, Value | undefined>>;
// };

export type LegendItemMarkRendererType<Config extends EncodingConfig> = React.ComponentType<{
  group: LegendGroupInformation<Config>;
  item: LegendItemInformation<Config>;
}>;

export type LegendItemLabelRendererType<Config extends EncodingConfig> = React.ComponentType<{
  group: LegendGroupInformation<Config>;
  item: LegendItemInformation<Config>;
}>;

export type LegendItemRendererProps<Config extends EncodingConfig> = {
  group: LegendGroupInformation<Config>;
  item: LegendItemInformation<Config>;
  MarkRenderer?: LegendItemMarkRendererType<Config>;
  LabelRenderer?: LegendItemLabelRendererType<Config>;
};

export type LegendItemRendererType<Config extends EncodingConfig> = React.ComponentType<
  LegendItemRendererProps<Config>
>;

export type LegendGroupRendererProps<Config extends EncodingConfig> = {
  group: LegendGroupInformation<Config>;
  ItemRenderer?: LegendItemRendererType<Config>;
  ItemMarkRenderer?: LegendItemMarkRendererType<Config>;
  ItemLabelRenderer?: LegendItemLabelRendererType<Config>;
  style?: CSSProperties;
};

export type LegendGroupRendererType<Config extends EncodingConfig> = React.ComponentType<
  LegendGroupRendererProps<Config>
>;

export type LegendRendererProps<Config extends EncodingConfig> = {
  groups: LegendGroupInformation<Config>[];
  LegendGroupRenderer?: LegendGroupRendererType<Config>;
  LegendItemRenderer?: LegendItemRendererType<Config>;
  LegendItemMarkRenderer?: LegendItemMarkRendererType<Config>;
  LegendItemLabelRenderer?: LegendItemLabelRendererType<Config>;
  style?: CSSProperties;
};

export type LegendRendererType<Config extends EncodingConfig> = React.ComponentType<
  LegendRendererProps<Config>
>;

export type LegendHooks<Config extends EncodingConfig> = {
  LegendRenderer?: LegendRendererType<Config>;
  LegendGroupRenderer?: LegendGroupRendererType<Config>;
  LegendItemRenderer?: LegendItemRendererType<Config>;
  LegendItemMarkRenderer?: LegendItemMarkRendererType<Config>;
  LegendItemLabelRenderer?: LegendItemLabelRendererType<Config>;
};
