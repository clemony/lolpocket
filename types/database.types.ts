export type Json
  = | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
  // Allows to automatically instanciate createClient with right options
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
      user_data: {
        Row: {
          name: string | null
          puuid: string | null
          region: string | null
          tag: string | null
          updated: string | null
          user_id: string
        }
        Insert: {
          name?: string | null
          puuid?: string | null
          region?: string | null
          tag?: string | null
          updated?: string | null
          user_id: string
        }
        Update: {
          name?: string | null
          puuid?: string | null
          region?: string | null
          tag?: string | null
          updated?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_public: {
        Row: {
          profile_splash: string | null
          puuid: string
          updated: string
          uuid: string
        }
        Insert: {
          profile_splash?: string | null
          puuid: string
          updated?: string
          uuid: string
        }
        Update: {
          profile_splash?: string | null
          puuid?: string
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_public_puuid_fkey'
            columns: ['puuid']
            isOneToOne: true
            referencedRelation: 'user_data'
            referencedColumns: ['puuid']
          },
          {
            foreignKeyName: 'user_public_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'user_data'
            referencedColumns: ['user_id']
          },
        ]
      }
      user_roles: {
        Row: {
          id: number
          puuid: string
          user_id: string
          user_role: Database['public']['Enums']['user_role']
        }
        Insert: {
          id?: number
          puuid: string
          user_id: string
          user_role: Database['public']['Enums']['user_role']
        }
        Update: {
          id?: number
          puuid?: string
          user_id?: string
          user_role?: Database['public']['Enums']['user_role']
        }
        Relationships: [
          {
            foreignKeyName: 'user_roles_puuid_fkey'
            columns: ['puuid']
            isOneToOne: true
            referencedRelation: 'user_data'
            referencedColumns: ['puuid']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database['public']['Enums']['permission']
        }
        Returns: boolean
      }
      check_user: {
        Args: { uid: string, email: string }
        Returns: boolean
      }
      custom_access_token_hook: {
        Args: { event: Json }
        Returns: Json
      }
      database_privs: {
        Args: { '': string }
        Returns: {
          username: string
          dbname: unknown
          privileges: string[]
        }[]
      }
      delete_claim: {
        Args: { uid: string, claim: string }
        Returns: string
      }
      get_claim: {
        Args: { uid: string, claim: string }
        Returns: Json
      }
      get_claims: {
        Args: { uid: string }
        Returns: Json
      }
      get_my_claim: {
        Args: { claim: string }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: { uid: string, claim: string, value: Json }
        Returns: string
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
  TableName extends DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
>
  = DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends (
        {
          Row: infer R
        }
      )
        ? R
        : never
    : DefaultSchemaTableNameOrOptions extends (
      keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    )
      ? (DefaultSchema['Tables']
        & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends (
          {
            Row: infer R
          }
        )
          ? R
          : never
      : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
>
  = DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends (
      {
        Insert: infer I
      }
    )
      ? I
      : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
      ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends (
        {
          Insert: infer I
        }
      )
        ? I
        : never
      : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
>
  = DefaultSchemaTableNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends (
      {
        Update: infer U
      }
    )
      ? U
      : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
      ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends (
        {
          Update: infer U
        }
      )
        ? U
        : never
      : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema['Enums']
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
>
  = DefaultSchemaEnumNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
      ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
      : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema['CompositeTypes']
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
>
  = PublicCompositeTypeNameOrOptions extends (
    {
      schema: keyof DatabaseWithoutInternals
    }
  )
    ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends (
      keyof DefaultSchema['CompositeTypes']
    )
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
