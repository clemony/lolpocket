import type { Component } from 'vue'

export interface FieldOption {
  id: string
  name: string
  component?: Component
  description?: string[]
}
