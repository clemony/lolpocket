import type { TabsRootProps as OriginalTabsRootProps, PrimitiveProps, TabsTriggerProps } from 'reka-ui'
import type { RouteMeta, RouteRecord } from 'vue-router'
import type { JwtPayload } from 'jwt-decode'

declare global {

  interface AuthRoleJwtPayload extends JwtPayload {
    app_metadata: {
      user_role: string
    }
  }
  interface PageRecord extends RouteRecord {
    meta: PageMeta
    altName: string
  }

  interface PageMeta extends RouteMeta {
    icon: string
    section: string
    search: boolean
    searchKeys: string[]
  }
}

export { }

export interface TabsRootPropsWithNullableModel<T extends StringOrNumber = StringOrNumber>
  extends Omit<OriginalTabsRootProps<T>, 'modelValue'> {
  modelValue?: T | null
}

export interface TabsTriggerPropsWithNullableValue {
  value: StringOrNumber | null
  disabled?: boolean
}
