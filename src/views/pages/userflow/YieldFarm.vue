<template>
  <div>
    <div class="my-6 flex">
      <vs-input
        icon-after="true"
        icon="search"
        color="warning"
        placeholder="Search Organization"
        v-model="search"
      />
      <vs-dropdown vs-trigger-click class="mx-6">
        <a class="a-icon" href="#">
          <vs-icon class="mx-2" icon="filter_list" />Filter
          <vs-icon class="" icon="expand_more"></vs-icon>
        </a>

        <vs-dropdown-menu>
          <vs-dropdown-item> Option 1 </vs-dropdown-item>
          <vs-dropdown-item> Option 2 </vs-dropdown-item>
          <vs-dropdown-item> Option 3 </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <div class="bg-white font-semibold text-2xl px-4 py-2" style="color: #000">
      Markets
    </div>
    <vs-table :data="users">
      <template slot="thead">
        <vs-th>#</vs-th>
        <vs-th>Assets<vs-icon icon="unfold_more" /></vs-th>
        <vs-th>Total Value Locked<vs-icon icon="unfold_more" /></vs-th>
        <vs-th
          >APY<vs-icon class="mx-1 w-3" icon="info_outlined" /><vs-icon
            icon="unfold_more"
        /></vs-th>
        <vs-th></vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
          <vs-td :data="data[indextr].email">
            {{ data[indextr].email }}
          </vs-td>

          <vs-td :data="data[indextr].username">
            {{ data[indextr].name }}
          </vs-td>

          <vs-td :data="data[indextr].id">
            {{ data[indextr].website }}
          </vs-td>

          <vs-button color="rgba(248, 190, 23, 0.5)">Deposit</vs-button>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>


<script>
export default {
  name: "YieldFarm",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          website: "ola.org",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net",
        },
      ],
    };
  },
};
</script>

<style scoped>
.vs-input >>> .vs-input--input {
  border-radius: 1.5em;
}
.vs-input >>> .vs-icon {
  font-size: 1.7em;
}
.vs-con-dropdown {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.5em;
  padding: 0.2em 1.2em;
  background: #fff;
}

.vs-con-dropdown >>> a {
  display: flex;
  align-items: center;
  color: #000;
  font-weight: 600;
  font-size: 1.2em;
}

.vs-dropdown-menu >>> a:hover {
  color: #000 !important;
}

.vs-dropdown--menu >>> .vs-icon {
  color: #a8b0b9;
  font-size: 1.4em;
}
</style>