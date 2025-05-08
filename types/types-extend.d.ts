import type { TabsRootProps as OriginalTabsRootProps, TabsTriggerProps, PrimitiveProps } from 'reka-ui';

export interface TabsRootPropsWithNullableModel<T extends StringOrNumber = StringOrNumber>
  extends Omit<OriginalTabsRootProps<T>, 'modelValue'> {
  modelValue?: T | null;
}



export interface TabsTriggerPropsWithNullableValue {
  value: StringOrNumber | null;
  disabled?: boolean;
}