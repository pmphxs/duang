module.exports = [
  {
    key: 'list1',
    api: 'list1',
    title: '测试列表 1',
    pageSize: 15,
    fields: [
      { key: 'id', 'title': 'ID' },
      { key: 'name', 'title': 'Name' },
      { key: 'opts', 'title': 'Opts' },
      { key: 'level', 'title': 'Level' },
      { key: 'radio', 'title': 'Radio' }
    ],
    actions: [
      { type: 'edit', title: '编辑' },
      { type: 'delete', title: '删除' },
      { type: 'custom', api: 'hx', title: '和谐' }
    ],
    filters: [
      { key: 'opts', title: 'Opts', component: 'Checkbox', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } },
      { key: 'level', title: 'Level', component: 'Select', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } },
      { key: 'radio', title: 'Radio', component: 'Radio', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } }
    ],
    inputs: [
      { key: 'name', title: 'Name', component: 'String' },
      { key: 'desc', title: 'Desc', component: 'Text' },
      { key: 'opts', title: 'Opts', component: 'Checkbox', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } },
      { key: 'level', title: 'Level', component: 'Select', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } },
      { key: 'radio', title: 'Radio', component: 'Radio', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } }
    ]
  },
  {
    key: 'list2',
    api: 'list2',
    title: '测试列表 2',
    pageSize: 15,
    fields: [
      { key: 'id', 'title': 'ID' },
      { key: 'name', 'title': 'Name' },
      { key: 'opts', 'title': 'Opts' },
    ],
    actions: [
      { type: 'edit', title: '编辑' },
      { type: 'delete', title: '删除' },
      { type: 'custom', api: 'hx', title: '和谐' }
    ],
    inputs: [
      { key: 'name', title: 'Text', component: 'String' },
      { key: 'opts', title: 'Opts', component: 'Checkbox', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } },
      { key: 'level', title: 'Level', component: 'Select', args: { options: { A: 'A', B: 'B', C: 'C', D: 'D' } } }
    ]
  }
];
