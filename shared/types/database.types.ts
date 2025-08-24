export type Json
  = | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '12.2.3 (519615d)'
  }
  public: {
    Tables: {
      role_permissions: {
        Row: {
          id: number
          permission: Database['public']['Enums']['permission']
          role: Database['public']['Enums']['user_role']
        }
        Insert: {
          id?: number
          permission: Database['public']['Enums']['permission']
          role: Database['public']['Enums']['user_role']
        }
        Update: {
          id?: number
          permission?: Database['public']['Enums']['permission']
          role?: Database['public']['Enums']['user_role']
        }
        Relationships: []
      }
      user_account: {
        Row: {
          icon: string | null
          inbox: Json | null
          level: number | null
          name: string | null
          puuid: string | null
          region: string | null
          regionGroup: string | null
          tag: string | null
          updated: string | null
          username: string | null
          uuid: string
        }
        Insert: {
          icon?: string | null
          inbox?: Json | null
          level?: number | null
          name?: string | null
          puuid?: string | null
          region?: string | null
          regionGroup?: string | null
          tag?: string | null
          updated?: string | null
          username?: string | null
          uuid: string
        }
        Update: {
          icon?: string | null
          inbox?: Json | null
          level?: number | null
          name?: string | null
          puuid?: string | null
          region?: string | null
          regionGroup?: string | null
          tag?: string | null
          updated?: string | null
          username?: string | null
          uuid?: string
        }
        Relationships: []
      }
      user_pockets: {
        Row: {
          pockets: Json | null
          updated: string
          uuid: string
        }
        Insert: {
          pockets?: Json | null
          updated?: string
          uuid: string
        }
        Update: {
          pockets?: Json | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_pockets_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'user_account'
            referencedColumns: ['uuid']
          },
        ]
      }
      user_public: {
        Row: {
          puuid: string
          splash: string | null
          updated: string
          uuid: string
        }
        Insert: {
          puuid: string
          splash?: string | null
          updated?: string
          uuid: string
        }
        Update: {
          puuid?: string
          splash?: string | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_public_puuid_fkey'
            columns: ['puuid']
            isOneToOne: true
            referencedRelation: 'user_account'
            referencedColumns: ['puuid']
          },
          {
            foreignKeyName: 'user_public_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'user_account'
            referencedColumns: ['uuid']
          },
        ]
      }
      user_settings: {
        Row: {
          alertDeletePocket: boolean | null
          alertNewPocket: boolean | null
          language: string | null
          lockSidebar: boolean | null
          motion: boolean | null
          noConfirmTrash: boolean | null
          showAllies: boolean | null
          showFlex: boolean | null
          showSolo: boolean | null
          theme: string | null
          updated: string
          uuid: string
        }
        Insert: {
          alertDeletePocket?: boolean | null
          alertNewPocket?: boolean | null
          language?: string | null
          lockSidebar?: boolean | null
          motion?: boolean | null
          noConfirmTrash?: boolean | null
          showAllies?: boolean | null
          showFlex?: boolean | null
          showSolo?: boolean | null
          theme?: string | null
          updated?: string
          uuid: string
        }
        Update: {
          alertDeletePocket?: boolean | null
          alertNewPocket?: boolean | null
          language?: string | null
          lockSidebar?: boolean | null
          motion?: boolean | null
          noConfirmTrash?: boolean | null
          showAllies?: boolean | null
          showFlex?: boolean | null
          showSolo?: boolean | null
          theme?: string | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_settings_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'user_account'
            referencedColumns: ['uuid']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_profile: {
        Args: { p_uuid?: string }
        Returns: {
          account: Json
          public: Json
          settings: Json
        }[]
      }
    }
    Enums: {
      permission: 'admin.dashboard' | 'summoner.dashboard'
      user_role: 'admin' | 'summoner'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables']
    & DefaultSchema['Views'])
    ? (DefaultSchema['Tables']
      & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema['Enums']
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema['CompositeTypes']
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      permission: ['admin.dashboard', 'summoner.dashboard'],
      user_role: ['admin', 'summoner'],
    },
  },
} as const
