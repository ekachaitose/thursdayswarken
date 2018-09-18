<template>
    <div>
        <div class="columns">
            <div class="column  ">
                <h1 class="title is-4">List Project</h1>
            </div>
        </div>
        <div class="columns">
            <div class="column is-12">

            <b-table
                :data=data
                 :columns="columns">

            </b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    const data = []

    return {
      data: [
        {
          id: 1,
          projectName: 'test',
          desc: 'Simmons',
          createdate: '2016-10-15 13:43:27',
          createby: 'Male'
        },
        {
          id: 2,
          projectName: 'test',
          desc: 'Simmons',
          createdate: '2016-10-15 13:43:27',
          createby: 'Male'
        },
        {
          id: 3,
          projectName: 'test',
          desc: 'Simmons',
          createdate: '2016-10-15 13:43:27',
          createby: 'Male'
        },
        {
          id: 4,
          projectName: 'test',
          desc: 'Simmons',
          createdate: '2016-10-15 13:43:27',
          createby: 'Male'
        },
        {
          id: 5,
          projectName: 'test',
          desc: 'Simmons',
          createdate: '2016-10-15 13:43:27',
          createby: 'Male'
        }
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'projectName',
          label: 'Project Name'
        },
        {
          field: 'desc',
          label: 'Description'
        },
        {
          field: 'createdate',
          label: 'create date',
          centered: true
        },
        {
          field: 'createby',
          label: 'create by'
        }
      ]
    }
  }
}
</script>

