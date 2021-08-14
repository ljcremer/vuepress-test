<template>
  <div>
    <div>
      <div class="mt-1">
        <div
          ref="searchBarRef"
          class="
            py-2
            px-6
            shadow-sm
            sm:text-sm
            border-gray-200 border
            w-full
            rounded-full
          "
          @click="setShowSearchModal(true)"
        >
          Search documentation
        </div>
      </div>
    </div>
    <TransitionRoot
      appear
      :show="showSearchModal"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-100 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Dialog
        tabindex="0"
        @keyup="search($event)"
        @keyup.stop.prevent.down="keyboardTraversal($event)"
        @keyup.stop.prevent.up="keyboardTraversal($event)"
        @keydown.esc="reset(false)"
        @keyup.enter="
          $router.push(
            '/' +
              activeHit.url
                .split('/')
                .splice(3, 4)
                .join('/')
          ),
            reset(false)
        "
        :initialFocus="searchBarRef"
        @close="reset(false)"
        class="fixed inset-0 z-10 overflow-y-auto"
      >
        <div class="flex justify-center">
          <DialogOverlay class="fixed inset-0 bg-black opacity-30 z-0" />
          <div
            class="
              w-6/12
              mx-auto
              bg-white
              rounded-3xl
              z-50
              top-32
              fixed
              ring-1 ring-gray-200
              border-transparent
            "
          >
            <div>
              <input
                name="name"
                id="tt-algolia-search-id"
                @keydown.up.stop.prevent="$event.preventDefault()"
                @keydown.down.stop.prevent="$event.preventDefault()"
                type="text"
                class="
                  px-10
                  py-5
                  text-gray-500
                  relative
                  bg-white
                  rounded
                  text-xl
                  border-0
                  shadow
                  outline-none
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-200
                  focus:border-transparent
                  w-full
                  pr-10
                "
                :class="groupedHits ? 'rounded-t-xl' : 'rounded-xl'"
                placeholder="Search documentation"
                v-model="searchText"
                autocomplete="off"
                ref="searchBarRef"
              />
              <span
                class="
                  z-10
                  h-full
                  leading-snug
                  font-normal
                  absolute
                  text-center text-black-300
                  bg-transparent
                  rounded
                  text-base
                  items-center
                  justify-center
                  w-18
                  right-0
                  pr-3
                  py-3
                "
              >
                <i
                  v-if="groupedHits"
                  class="pr-2 border-r-2 cursor-pointer"
                  @click="(searchText = ''), search()"
                  >x</i
                >
                <i class="pl-2 cursor-pointer" @click="reset(false)">Cancel</i>
              </span>
            </div>
            <div v-if="groupedHits" class="flex rounded-b-3xl">
              <div class="w-auto flex-none rounded-bl-3xl overflow-hidden">
                <div
                  v-for="(groupKey, index) in Object.keys(groupedHits)"
                  :key="index"
                >
                  <div
                    class="
                      bg-gray-200
                      text-gray-700
                      font-Nunito font-bold
                      h-8
                      pl-4
                      flex
                      items-center
                    "
                  >
                    {{ groupKey }}
                  </div>
                  <router-link
                    v-for="item in groupedHits[groupKey]"
                    :key="item.objectID"
                    class="
                      flex
                      tt-algolia-search-class
                      cursor-pointer
                      border-b border-gray-200
                    "
                    :class="item.active ? 'bg-blue-200' : 'bg-white'"
                    @keypress.enter="
                      $router.push(
                        '/' +
                          item.url
                            .split('/')
                            .splice(3, 4)
                            .join('/')
                      )
                    "
                    :to="
                      '/' +
                        item.url
                          .split('/')
                          .splice(3, 4)
                          .join('/')
                    "
                    @click="setShowSearchModal(false)"
                    @mouseover="activate(item.objectID)"
                    @focus="activate(item.objectID)"
                  >
                    <div class="px-4 font-semibold text-gray-700">
                      <div
                        v-if="item._highlightResult.hierarchy.lvl1"
                        v-html="item._highlightResult.hierarchy.lvl1.value"
                        class="pt-2 pb-2"
                      ></div>
                      <div
                        v-if="item._highlightResult.hierarchy.lvl2"
                        v-html="item._highlightResult.hierarchy.lvl2.value"
                        class="pl-2 pb-2 text-sm"
                      ></div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="bg-gray-50 w-full rounded-br-3xl">
                <ul
                  class="
                    flex
                    justify-center
                    items-center
                    flex-wrap
                    text-sm
                    algolia-docsearch-suggestion--highlight
                    pt-8
                    pb-2
                  "
                >
                  <li class="flex items-center">
                    <span>{{ activeHit.hierarchy.lvl0 }}</span>
                  </li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    role="presentation"
                    class="
                      block
                      
                      w-8
                      h-8
                      py-2
                      stroke-current stroke-2
                      flex-none
                      text-grey-500-opacity-60
                    "
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </ul>
                <div
                  class="flex items-center w-full justify-center text-2xl pb-8"
                >
                  <span>{{ activeHit.hierarchy.lvl1 }}</span>
                </div>
                <div class="px-10">{{ activeHit.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script lang="ts">
import { watch, computed, defineComponent, ref, Ref } from "vue";
import {
  TransitionRoot,
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

interface TroopHits {
  url: string;
  anchor: string;
  content: any;
  active: boolean;
  hierarchy: {
    lvl0: string;
    lvl1: string;
    lvl2: string;
    lvl3: string;
    lvl4: string;
    lvl5: string;
    lvl6: string;
  };
}

// For the search only version
import algoliasearch from "algoliasearch/lite";
import { SearchResponse, Hit } from "@algolia/client-search";

const client = algoliasearch("J3VZLGVONZ", "c5acf5e7c63613ad243e06b0dbb33fd3");
const index = client.initIndex("tsla");
export default defineComponent({
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    TransitionRoot,
  },
  name: "TroopAlgolia",
  setup() {
    const state = ref({
      searchResponse: {} as SearchResponse,
      hits: [] as Hit<TroopHits>[],
      activeHit: undefined as Hit<TroopHits>,
    });
    const searchBarRef = ref(null);
    let keepRecord: Ref<string> = ref("");
    const searchText: Ref<string> = ref("");
    let showSearchModal: Ref<boolean> = ref(false);
    const searchingAlgolia: Ref<{}> = ref({});
    const activeHit = computed(() => {
      if (state.value.hits && state.value.hits.length > 0) {
        return state.value.activeHit;
      }
      return undefined;
    });
    const search = (event: any) => {
      if (event.code === "ArrowDown" || event.code === "ArrowUp") {
        event.preventDefault();
      } else if (searchText.value && searchText.value.length > 2) {
        searchingAlgolia.value = true;
        index.search<TroopHits>(searchText.value).then(({ hits }) => {
          searchingAlgolia.value = false;
          state.value.hits = hits
            .sort((a, b) => {
              if (a.hierarchy.lvl0 > b.hierarchy.lvl0) {
                return -1;
              }
              if (b.hierarchy.lvl0 > a.hierarchy.lvl0) {
                return 1;
              }
              return 0;
            })
            .map((value, index) => {
              if (index === 0) {
                value.active = true;
              } else {
                value.active = false;
              }
              return value;
            }); // sort by category
          state.value.activeHit = hits[0]; // set the first hit;
        });
      } else {
        state.value.hits = [];
      }
    };

    const setShowSearchModal = (value: boolean) => {
      showSearchModal.value = value;
    };
    const reset = (value: boolean) => {
      searchText.value = "";
      state.value.hits = [];
      showSearchModal.value = value;
    };
    const activate = (item: string) => {
      console.log("activate");
      resetSelected();
      const hit = state.value.hits.find((value) => value.objectID === item);
      if (hit) {
        state.value.activeHit = hit;
        keepRecord.value = hit.objectID;
        hit.active = true;
      }
    };
    const resetSelected = () => {
      console.log("reset selected");
      for (const value of state.value.hits) {
        value.active = false;
      }
    };

    const records = computed(() =>
      state.value.hits.map((value) => {
        return value.objectID;
      })
    );
    const keyboardTraversal = (event: any) => {
      if (keepRecord.value === "" && event.code === "ArrowDown") {
        keepRecord.value = records.value[0];
      } else {
        let next: number = records.value.indexOf(keepRecord.value);
        if (event.code === "ArrowDown" && next < state.value.hits.length) {
          next++;
          if (next < state.value.hits.length) {
            keepRecord.value = records.value[next];
          } else {
            keepRecord.value = records.value[records.value.length - 1];
          }
        }
        if (event.code === "ArrowUp" && next >= 0) {
          next--;
          if (next >= 0) {
            keepRecord.value = records.value[next];
          } else {
            keepRecord.value = records.value[0];
          }
        }
      }
    };

    watch(keepRecord, (currentValue, oldValue) => {
      activate(currentValue);
    });

    const groupedHits = computed(() => {
      if (state.value.hits && state.value.hits.length > 0) {
        return state.value.hits.reduce((acc, curr) => {
          if (!acc[curr.hierarchy.lvl0]) {
            acc[curr.hierarchy.lvl0] = [];
          }
          acc[curr.hierarchy.lvl0].push(curr);
          return acc;
        }, {});
      } else {
        return undefined;
      }
    });
    return {
      searchBarRef,
      records,
      keyboardTraversal,
      resetSelected,
      state,
      keepRecord,
      activeHit,
      activate,
      searchText,
      search,
      searchingAlgolia,
      setShowSearchModal,
      showSearchModal,
      groupedHits,
      reset,
    };
  },
});
</script>
