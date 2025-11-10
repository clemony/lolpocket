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
    PostgrestVersion: '13.0.5'
  }
  public: {
    Tables: {
      account: {
        Row: {
          icon: string | null
          level: number | null
          name: string | null
          peer_messages: boolean
          puuid: string | null
          region: string | null
          splash: string | null
          tag: string | null
          title: string | null
          updated: string | null
          username: string | null
          uuid: string
        }
        Insert: {
          icon?: string | null
          level?: number | null
          name?: string | null
          peer_messages?: boolean
          puuid?: string | null
          region?: string | null
          splash?: string | null
          tag?: string | null
          title?: string | null
          updated?: string | null
          username?: string | null
          uuid: string
        }
        Update: {
          icon?: string | null
          level?: number | null
          name?: string | null
          peer_messages?: boolean
          puuid?: string | null
          region?: string | null
          splash?: string | null
          tag?: string | null
          title?: string | null
          updated?: string | null
          username?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'account_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'internal_users'
            referencedColumns: ['internal_id']
          },
        ]
      }
      comments: {
        Row: {
          author_uid: string | null
          content: Json
          created: string | null
          downvotes: string[] | null
          edited: string | null
          id: string
          parent_id: string | null
          removed: string | null
          thread_id: string | null
          upvotes: string[] | null
        }
        Insert: {
          author_uid?: string | null
          content: Json
          created?: string | null
          downvotes?: string[] | null
          edited?: string | null
          id?: string
          parent_id?: string | null
          removed?: string | null
          thread_id?: string | null
          upvotes?: string[] | null
        }
        Update: {
          author_uid?: string | null
          content?: Json
          created?: string | null
          downvotes?: string[] | null
          edited?: string | null
          id?: string
          parent_id?: string | null
          removed?: string | null
          thread_id?: string | null
          upvotes?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: 'comments_author_uid_fkey'
            columns: ['author_uid']
            isOneToOne: false
            referencedRelation: 'internal_users'
            referencedColumns: ['internal_id']
          },
          {
            foreignKeyName: 'comments_parent_id_fkey'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'comments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_thread_id_fkey'
            columns: ['thread_id']
            isOneToOne: false
            referencedRelation: 'threads'
            referencedColumns: ['id']
          },
        ]
      }
      internal_users: {
        Row: {
          auth_uid: string
          created_at: string
          internal_id: string
          metadata: Json | null
        }
        Insert: {
          auth_uid: string
          created_at?: string
          internal_id?: string
          metadata?: Json | null
        }
        Update: {
          auth_uid?: string
          created_at?: string
          internal_id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      pockets: {
        Row: {
          champions: string[] | null
          comments: boolean
          created: string
          icon: string | null
          items: Json | null
          key: string | null
          likes: number | null
          pockets: Json | null
          public: boolean
          roles: string[] | null
          runes: Json | null
          spells: Json | null
          thread: string | null
          updated: string
          uuid: string
        }
        Insert: {
          champions?: string[] | null
          comments?: boolean
          created?: string
          icon?: string | null
          items?: Json | null
          key?: string | null
          likes?: number | null
          pockets?: Json | null
          public?: boolean
          roles?: string[] | null
          runes?: Json | null
          spells?: Json | null
          thread?: string | null
          updated?: string
          uuid: string
        }
        Update: {
          champions?: string[] | null
          comments?: boolean
          created?: string
          icon?: string | null
          items?: Json | null
          key?: string | null
          likes?: number | null
          pockets?: Json | null
          public?: boolean
          roles?: string[] | null
          runes?: Json | null
          spells?: Json | null
          thread?: string | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'pockets_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'internal_users'
            referencedColumns: ['internal_id']
          },
        ]
      }
      settings: {
        Row: {
          favorite_pockets: string[] | null
          favorite_summoners: string[] | null
          instant_trash: boolean | null
          language: string | null
          motion: boolean | null
          once: unknown
          pin_sidebar: boolean | null
          ping_delete_pocket: boolean | null
          ping_new_pocket: boolean
          show_allies: boolean | null
          show_flex: boolean | null
          show_solo: boolean | null
          theme: string | null
          updated: string
          uuid: string
        }
        Insert: {
          favorite_pockets?: string[] | null
          favorite_summoners?: string[] | null
          instant_trash?: boolean | null
          language?: string | null
          motion?: boolean | null
          once?: unknown
          pin_sidebar?: boolean | null
          ping_delete_pocket?: boolean | null
          ping_new_pocket?: boolean
          show_allies?: boolean | null
          show_flex?: boolean | null
          show_solo?: boolean | null
          theme?: string | null
          updated?: string
          uuid: string
        }
        Update: {
          favorite_pockets?: string[] | null
          favorite_summoners?: string[] | null
          instant_trash?: boolean | null
          language?: string | null
          motion?: boolean | null
          once?: unknown
          pin_sidebar?: boolean | null
          ping_delete_pocket?: boolean | null
          ping_new_pocket?: boolean
          show_allies?: boolean | null
          show_flex?: boolean | null
          show_solo?: boolean | null
          theme?: string | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'settings_uuid_fkey'
            columns: ['uuid']
            isOneToOne: true
            referencedRelation: 'internal_users'
            referencedColumns: ['internal_id']
          },
        ]
      }
      threads: {
        Row: {
          created_at: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_internal_id: { Args: never, Returns: string }
      get_user_profile: {
        Args: { p_uuid?: string }
        Returns: {
          account: Json
          settings: Json
          user_pockets: Json
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
