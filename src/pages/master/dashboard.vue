<template>
  <div class="w-screen h-screen flex">
    <!-- Sidebar -->
    <div class="w-[400px] h-full bg-gray-200 text-white" v-if="isSidebarOpen">
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl">Test Dashboard</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div
          class="px-[20px] h-full flex flex-col justify-between space-y-[10px]"
        >
          <div class="h-auto flex flex-col">
            <router-link
              to="/home"
              class="inline-flex relative items-center py-[10px] px-[10px] text-sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </router-link>

            <router-link
              to="/profile"
              class="inline-flex relative items-center py-[10px] px-[10px] text-sm"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Profile
            </router-link>
          </div>
          <div
            class="inline-flex relative items-center py-[10px] px-[10px] text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            Setting
          </div>
        </div>
      </div>
    </div>

    <!-- Main -->
    <div
      :class="isSidebarOpen ? 'flex-1' : 'w-full'"
      class="h-full bg-gray-400"
    >
      <div
        class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-white p-5">
        <h3 class="text-lg font-bold mb-4">CRUD Example</h3>
        <!-- Form -->
        <div class="mb-4">
          <input
            v-model="newItem"
            type="text"
            class="border p-2"
            placeholder="Add new item"
          />
          <button
            @click="addItem"
            class="ml-2 px-4 py-2 bg-blue-500 text-white"
          >
            Add
          </button>
        </div>
        <!-- Table List -->
        <div class="overflow-x-auto">
          <table
            class="table-auto w-full border-collapse border border-gray-300"
          >
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Number
                </th>
                <th class="border border-gray-300 px-4 py-2 text-left">Item</th>
                <th class="border border-gray-300 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                class="hover:bg-gray-100"
              >
                <td class="border border-gray-300 px-4 py-2">
                  {{ index + 1 }}
                </td>
                <td class="border border-gray-300 px-4 py-2">{{ item }}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                  <button
                    @click="editItem(index)"
                    class="px-2 py-1 text-sm bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    @click="removeItem(index)"
                    class="ml-2 px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Edit Modal -->
        <div v-if="isEditing">
          <h3>Edit Item</h3>
          <input
            v-model="editInput"
            type="text"
            class="border p-2"
            placeholder="Edit item"
          />
          <button
            @click="updateItem"
            class="ml-2 px-4 py-2 bg-green-500 text-white"
          >
            Save
          </button>
          <button
            @click="cancelEdit"
            class="ml-2 px-4 py-2 bg-gray-500 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
      newItem: "",
      items: [],
      isEditing: false,
      editIndex: null,
      editInput: "",
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== "") {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    },
    editItem(index) {
      this.isEditing = true;
      this.editIndex = index;
      this.editInput = this.items[index];
    },
    updateItem() {
      if (this.editInput.trim() !== "") {
        this.items[this.editIndex] = this.editInput;
        this.cancelEdit();
      }
    },
    cancelEdit() {
      this.isEditing = false;
      this.editIndex = null;
      this.editInput = "";
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    toggleSideBar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
