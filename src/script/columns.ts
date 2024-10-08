import type { pocket } from './../stores/pocketStore';

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
  }
  
  const columnHelper = createColumnHelper<pocket>()
  
  // Make some columns!
  const defaultColumns = [
    // Display Column
    columnHelper.display({
      id: 'actions',
      cell: props => <RowActions row={props.row} />,
    }),

    // Grouping Column
    columnHelper.group({
      header: 'Pocket',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('name', {
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor(row => row.icon, {
          id: 'icon',
          cell: info => info.getValue(),
          header: () => <span>icon</span>,
          footer: props => props.column.id,
        }),
      ],
    }),
    // Grouping Column
    columnHelper.group({
      header: 'Info',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('age', {
          header: () => 'Age',
          footer: props => props.column.id,
        }),
        // Grouping Column
        columnHelper.group({
          header: 'More Info',
          columns: [
            // Accessor Column
            columnHelper.accessor('visits', {
              header: () => <span>Visits</span>,
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('status', {
              header: 'Status',
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('progress', {
              header: 'Profile Progress',
              footer: props => props.column.id,
            }),
          ],
        }),
      ],
    }),
  ]