import type { RouteRecordRaw } from "vue-router";
import LabelEditor from '@/views/LabelEditor.vue'
import ResolveEditor from '@/views/ResolveEditor.vue'

export type NamedRouteRecord = WithRequired<RouteRecordRaw, "name">;

const routeRecords = Array<NamedRouteRecord> = [
  {
    name: 'home',
    path: '/',
    component: LabelEditor
  },
  {
    name: 'label',
    path: '/label',
    component: LabelEditor
  },
  {
    name: 'resolve',
    path: '/resolve',
    component: ResolveEditor
  }
]

export default routeRecords

