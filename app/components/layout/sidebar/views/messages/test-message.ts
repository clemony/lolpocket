import { hexoid } from 'hexoid'

const id = hexoid()

export const testMessage: InboxMessage = {
  id: id(),
  title: 'A test message for you.',
  content:
    'Lorem ipsum dolor sit amet, maybe dinner time consectetur adipiscing elit. Phasellus et viverra justo, a vulputate orci. Nullam varius tempor massa, ut eleifend est porttitor ac. Aenean aliquet ut sapien nec dapibus. Pellentesque ultricies viverra lacinia. Nunc sed tincidunt nisi. Nullam quis auctor lectus. Nunc auctor fringilla tristique. Proin purus mauris, vestibulum a imperdiet at, tristique id felis. Nulla facilisi. Vivamus vestibulum porta massa, et efficitur nisl imperdiet quis. Suspendisse sagittis, mauris et luctus placerat, odio ante ornare risus, vitae lacinia enim diam quis orci. Quisque bibendum nisl nec augue ornare, sit amet pellentesque magna pretium. Sed eros eros, semper id purus ut, hendrerit dictum nunc. In ornare odio erat, in volutpat velit laoreet eu. Suspendisse in odio turpis.',
  date: new Date(),
  from: {
    id: 'clem@lolpocket.com',
    name: 'clem',
    icon: 'solar:cat-linear',
  },
  read: false,
  template: null,
  vars: null,
}
