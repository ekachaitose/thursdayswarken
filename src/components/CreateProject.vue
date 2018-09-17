<template>
 <div>
    <div class="columns">
        <div class="column ">
        <h1 class="title is-4">Create Project</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column">
        <b-field horizontal label="Project Name">
            <b-input name="projectName" placeholder="projectName" expanded></b-input>
        </b-field>
          <b-field horizontal label="Description">
            <b-input type="textarea"></b-input>
        </b-field>
        </div>
    </div>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
                <button class="button is-primary">
                 SAVE
                </button>
                <button class="button is-danger">
                 DELETE
                </button>
             
        </div>
    </div>
  
    </div>
</template>
<script>
export default {}
</script>
