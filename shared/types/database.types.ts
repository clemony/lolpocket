export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      account: {
        Row: {
          color: string | null
          created: string | null
          locale: string | null
          peer_messages: boolean
          public_pockets: string[] | null
          puuid: string | null
          splash: string | null
          title: string | null
          updated: string | null
          username: string | null
          uuid: string
        }
        Insert: {
          color?: string | null
          created?: string | null
          locale?: string | null
          peer_messages?: boolean
          public_pockets?: string[] | null
          puuid?: string | null
          splash?: string | null
          title?: string | null
          updated?: string | null
          username?: string | null
          uuid: string
        }
        Update: {
          color?: string | null
          created?: string | null
          locale?: string | null
          peer_messages?: boolean
          public_pockets?: string[] | null
          puuid?: string | null
          splash?: string | null
          title?: string | null
          updated?: string | null
          username?: string | null
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: true
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          }
        ]
      }
      comment_votes: {
        Row: {
          comment_id: string
          created_at: string | null
          uuid: string
          vote: Database["public"]["Enums"]["vote"] | null
        }
        Insert: {
          comment_id: string
          created_at?: string | null
          uuid: string
          vote?: Database["public"]["Enums"]["vote"] | null
        }
        Update: {
          comment_id?: string
          created_at?: string | null
          uuid?: string
          vote?: Database["public"]["Enums"]["vote"] | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_votes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_votes_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: false
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          }
        ]
      }
      comments: {
        Row: {
          content: Json | null
          created: string | null
          html: string | null
          id: string
          parent_id: string | null
          removed: string | null
          removed_content: string | null
          score: number
          thread_id: string | null
          updated: string | null
          uuid: string | null
        }
        Insert: {
          content?: Json | null
          created?: string | null
          html?: string | null
          id?: string
          parent_id?: string | null
          removed?: string | null
          removed_content?: string | null
          score?: number
          thread_id?: string | null
          updated?: string | null
          uuid?: string | null
        }
        Update: {
          content?: Json | null
          created?: string | null
          html?: string | null
          id?: string
          parent_id?: string | null
          removed?: string | null
          removed_content?: string | null
          score?: number
          thread_id?: string | null
          updated?: string | null
          uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: false
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          }
        ]
      }
      feed_links: {
        Row: {
          author: string | null
          created_at: string
          excerpt: string | null
          fetched_at: string
          flair: string | null
          id: string
          keywords: string[]
          metadata: Json
          num_comments: number
          permalink: string
          preview_image_url: string | null
          score: number
          source: string
          source_created_at: string
          source_id: string
          subreddit: string
          text: string | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          url: string
          video_dash_url: string | null
          video_duration: number | null
          video_height: number | null
          video_hls_url: string | null
          video_id: string | null
          video_provider: string | null
          video_url: string | null
          video_width: number | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          excerpt?: string | null
          fetched_at?: string
          flair?: string | null
          id?: string
          keywords?: string[]
          metadata?: Json
          num_comments?: number
          permalink: string
          preview_image_url?: string | null
          score?: number
          source: string
          source_created_at: string
          source_id: string
          subreddit: string
          text?: string | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          url: string
          video_dash_url?: string | null
          video_duration?: number | null
          video_height?: number | null
          video_hls_url?: string | null
          video_id?: string | null
          video_provider?: string | null
          video_url?: string | null
          video_width?: number | null
        }
        Update: {
          author?: string | null
          created_at?: string
          excerpt?: string | null
          fetched_at?: string
          flair?: string | null
          id?: string
          keywords?: string[]
          metadata?: Json
          num_comments?: number
          permalink?: string
          preview_image_url?: string | null
          score?: number
          source?: string
          source_created_at?: string
          source_id?: string
          subreddit?: string
          text?: string | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          url?: string
          video_dash_url?: string | null
          video_duration?: number | null
          video_height?: number | null
          video_hls_url?: string | null
          video_id?: string | null
          video_provider?: string | null
          video_url?: string | null
          video_width?: number | null
        }
        Relationships: []
      }
      internal_users: {
        Row: {
          auth_uid: string
          created_at: string | null
          metadata: Json | null
          role: string[]
          uuid: string
        }
        Insert: {
          auth_uid: string
          created_at?: string | null
          metadata?: Json | null
          role?: string[]
          uuid?: string
        }
        Update: {
          auth_uid?: string
          created_at?: string | null
          metadata?: Json | null
          role?: string[]
          uuid?: string
        }
        Relationships: []
      }
      pockets: {
        Row: {
          _champion: string | null
          _items: string | null
          _role: string | null
          _runes: string | null
          _spells: string | null
          champions: string[] | null
          comments: boolean
          created: string
          guide: Json | null
          icon: string | null
          items: Json | null
          key: string
          likes: number | null
          name: string | null
          ouuid: string | null
          public: boolean
          roles: string[] | null
          runes: Json | null
          spells: Json | null
          tags: string[] | null
          updated: string
          uuid: string
        }
        Insert: {
          _champion?: string | null
          _items?: string | null
          _role?: string | null
          _runes?: string | null
          _spells?: string | null
          champions?: string[] | null
          comments?: boolean
          created?: string
          guide?: Json | null
          icon?: string | null
          items?: Json | null
          key?: string
          likes?: number | null
          name?: string | null
          ouuid?: string | null
          public?: boolean
          roles?: string[] | null
          runes?: Json | null
          spells?: Json | null
          tags?: string[] | null
          updated?: string
          uuid: string
        }
        Update: {
          _champion?: string | null
          _items?: string | null
          _role?: string | null
          _runes?: string | null
          _spells?: string | null
          champions?: string[] | null
          comments?: boolean
          created?: string
          guide?: Json | null
          icon?: string | null
          items?: Json | null
          key?: string
          likes?: number | null
          name?: string | null
          ouuid?: string | null
          public?: boolean
          roles?: string[] | null
          runes?: Json | null
          spells?: Json | null
          tags?: string[] | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "pockets_ouuid_fkey"
            columns: ["ouuid"]
            isOneToOne: false
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "pockets_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: false
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          }
        ]
      }
      settings: {
        Row: {
          blocked_users: string[] | null
          fast_trash_message: boolean | null
          fast_trash_pocket: boolean | null
          favorite_pockets: string[] | null
          favorite_summoners: string[] | null
          locale: string | null
          motion: boolean | null
          muted: boolean | null
          once: unknown
          ping_delete_pocket: boolean | null
          ping_new_friend: boolean | null
          ping_new_message: boolean | null
          "ping_new_message:": boolean | null
          ping_new_pocket: boolean
          ping_pocket_comment: boolean | null
          show_allies: boolean | null
          show_flex: boolean | null
          show_solo: boolean | null
          theme: string | null
          updated: string
          uuid: string
        }
        Insert: {
          blocked_users?: string[] | null
          fast_trash_message?: boolean | null
          fast_trash_pocket?: boolean | null
          favorite_pockets?: string[] | null
          favorite_summoners?: string[] | null
          locale?: string | null
          motion?: boolean | null
          muted?: boolean | null
          once?: unknown
          ping_delete_pocket?: boolean | null
          ping_new_friend?: boolean | null
          ping_new_message?: boolean | null
          "ping_new_message:"?: boolean | null
          ping_new_pocket?: boolean
          ping_pocket_comment?: boolean | null
          show_allies?: boolean | null
          show_flex?: boolean | null
          show_solo?: boolean | null
          theme?: string | null
          updated?: string
          uuid: string
        }
        Update: {
          blocked_users?: string[] | null
          fast_trash_message?: boolean | null
          fast_trash_pocket?: boolean | null
          favorite_pockets?: string[] | null
          favorite_summoners?: string[] | null
          locale?: string | null
          motion?: boolean | null
          muted?: boolean | null
          once?: unknown
          ping_delete_pocket?: boolean | null
          ping_new_friend?: boolean | null
          ping_new_message?: boolean | null
          "ping_new_message:"?: boolean | null
          ping_new_pocket?: boolean
          ping_pocket_comment?: boolean | null
          show_allies?: boolean | null
          show_flex?: boolean | null
          show_solo?: boolean | null
          theme?: string | null
          updated?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "settings_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: true
            referencedRelation: "internal_users"
            referencedColumns: ["uuid"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_internal_id: { Args: never; Returns: string }
      get_thread: { Args: { p_thread_id: string }; Returns: Json }
      "get_thread-old": { Args: { p_thread_id: string }; Returns: Json }
      get_user_account: {
        Args: { p_uuid?: string }
        Returns: {
          account: Json
          pockets: Json
          settings: Json
        }[]
      }
      insert_comment: {
        Args: {
          p_comment_id?: string
          p_content: Json
          p_html?: string
          p_parent_id?: string
          p_thread_id?: string
        }
        Returns: Json
      }
      remove_comment: {
        Args: {
          p_comment_id: string
          p_content: Json
          p_html: string
          p_removed: string
          p_removed_content: string
        }
        Returns: {
          content: Json | null
          created: string | null
          html: string | null
          id: string
          parent_id: string | null
          removed: string | null
          removed_content: string | null
          score: number
          thread_id: string | null
          updated: string | null
          uuid: string | null
        }
        SetofOptions: {
          from: "*"
          to: "comments"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_account: {
        Args: { p_patch: Json }
        Returns: {
          color: string | null
          created: string | null
          locale: string | null
          peer_messages: boolean
          public_pockets: string[] | null
          puuid: string | null
          splash: string | null
          title: string | null
          updated: string | null
          username: string | null
          uuid: string
        }
        SetofOptions: {
          from: "*"
          to: "account"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_comment: {
        Args: { p_comment_id: string; p_content: Json; p_html?: string }
        Returns: {
          content: Json | null
          created: string | null
          html: string | null
          id: string
          parent_id: string | null
          removed: string | null
          removed_content: string | null
          score: number
          thread_id: string | null
          updated: string | null
          uuid: string | null
        }
        SetofOptions: {
          from: "*"
          to: "comments"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_settings: {
        Args: { p_patch: Json }
        Returns: {
          blocked_users: string[] | null
          fast_trash_message: boolean | null
          fast_trash_pocket: boolean | null
          favorite_pockets: string[] | null
          favorite_summoners: string[] | null
          locale: string | null
          motion: boolean | null
          muted: boolean | null
          once: unknown
          ping_delete_pocket: boolean | null
          ping_new_friend: boolean | null
          ping_new_message: boolean | null
          "ping_new_message:": boolean | null
          ping_new_pocket: boolean
          ping_pocket_comment: boolean | null
          show_allies: boolean | null
          show_flex: boolean | null
          show_solo: boolean | null
          theme: string | null
          updated: string
          uuid: string
        }
        SetofOptions: {
          from: "*"
          to: "settings"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      permission: "admin" | "mod"
      removal_type: "mod" | "user"
      role: "admin" | "summoner"
      user_role: "admin" | "summoner"
      vote: "-1" | "0" | "1"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      permission: ["admin", "mod"],
      removal_type: ["mod", "user"],
      role: ["admin", "summoner"],
      user_role: ["admin", "summoner"],
      vote: ["-1", "0", "1"]
    }
  }
} as const
