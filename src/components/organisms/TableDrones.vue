<template>
  <section class="container height-100vh">
    <table class="table table-hover table-responsive" id="drones" role="drones">
      <thead>
        <tr>
          <th scope="col">DRONE</th>
          <th scope="col">CUSTOMER</th>
          <th scope="col">BATTERIES</th>
          <th scope="col">MAX SPEED</th>
          <th scope="col">AVERAGE SPEED</th>
          <th scope="col">CURRENTY FLY</th>
          <th scope="col">STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in drones" :key="item.key" @mousedown="viewDrone(item.id)">
          <th scope="row">
            <div class="drone-id">
              <p>{{ item.id }}</p>
            </div>
          </th>
          <td>
            <div class="customer">
              <img :src="item.image" :title="item.name" :alt="item.name" />
              <div>
                <h2>{{ item.name }}</h2>
                <p>{{ item.address }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="batteries">
              <div class="batteries-content" :data-tooltip="item.battery + '%'">
                <div
                  class="batteries-content__percent color-red"
                  v-if="item.battery >= 0 && item.battery <= 15"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="item.battery + '%'"
                  :style="'width:' + item.battery + '%'"
                ></div>
                <div
                  class="batteries-content__percent color-yellow"
                  v-else-if="item.battery > 15 && item.battery <= 30"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="item.battery + '%'"
                  :style="'width:' + item.battery + '%'"
                ></div>
                <div
                  class="batteries-content__percent color-green"
                  v-else
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="item.battery + '%'"
                  :style="'width:' + item.battery + '%'"
                ></div>
              </div>
            </div>
          </td>
          <td>
            <div class="max-speed-and-average-speed">
              <p>
                {{
                  Number.isInteger(item.max_speed)
                    ? item.max_speed
                    : String(item.max_speed).split('.')[0]
                }}.<span class="max-speed-and-average-speed__after-point">
                  {{
                    Number.isInteger(item.max_speed) ? 0 : String(item.max_speed).split('.')[1][0]
                  }}</span
                ><span class="max-speed-and-average-speed__unito-of-measurement">m/h</span>
              </p>
            </div>
          </td>
          <td>
            <div class="max-speed-and-average-speed">
              <p>
                {{
                  Number.isInteger(item.average_speed)
                    ? item.average_speed
                    : String(item.average_speed).split('.')[0]
                }}.<span class="max-speed-and-average-speed__after-point">
                  {{
                    Number.isInteger(item.average_speed)
                      ? 0
                      : String(item.average_speed).split('.')[1][0]
                  }}</span
                ><span class="max-speed-and-average-speed__unito-of-measurement">m/h</span>
              </p>
            </div>
          </td>
          <td>
            <div class="fly">
              <div class="fly-wrapper">
                <p v-if="item.fly <= 50 && item.status == 'flying'">◀</p>
                <label
                  :for="'customRange' + item.id"
                  v-if="item.status == 'flying' && item.fly > 50"
                  :htmlFor="'customRange' + item.id"
                  class="form-label"
                >
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="100"
                    :value="item.fly"
                    data-tooltip="coming"
                    :id="'customRange' + item.id"
                    disabled
                  />
                </label>
                <label
                  :for="'customRange' + item.id"
                  v-if="item.status == 'flying' && item.fly <= 50"
                  :htmlFor="'customRange' + item.id"
                  class="form-label"
                >
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="100"
                    :value="item.fly"
                    data-tooltip="going"
                    :id="'customRange' + item.id"
                    disabled
                  />
                </label>
                <div class="hr" v-if="item.status != 'flying'">
                  <hr />
                </div>
                <p class="arrow-right" v-if="item.fly > 50 && item.status == 'flying'">▶</p>
              </div>
            </div>
          </td>
          <td>
            <div v-if="item.status == 'repair'" class="table-status-drone color-red">
              <p>{{ item.status }}</p>
            </div>
            <div v-else-if="item.status == 'offline'" class="table-status-drone color-yellow">
              <p>{{ item.status }}</p>
            </div>
            <div v-else class="table-status-drone color-green">
              <p>{{ item.status }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div>
        <b-pagination
          id="pagination"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="drones"
          size="lg"
          pills
          @click.native="paginationGetDrones()"
          v-if="decisionPagination && getDecisionFilterSearch === false"
        ></b-pagination>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
import { Filters } from '@/utils/filters'

const FilterDrones = new Filters()

const drone = namespace('Drone')

@Component({
  name: 'TableDrones',
})

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
export default class InputsFilters extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public drones: Array<object> = []

  public dronesAll: Array<object> = []

  public baterryToolTip = false

  public decisionPagination = true

  public perPage = 20

  public currentPage = 1

  public viewDrone(id: number): void {
    this.$router.push(`/drones/${id}`)
  }

  public async paginationGetDrones() {
    if (this.dronesAll !== []) {
      const responseAll = await axios.get(
        `http://services.solucx.com.br/mock/drones?_sort=id&_order=asc`
      )
      await this.actionDrones(responseAll.data)
      this.dronesAll = responseAll.data
    } else {
      this.dronesAll = this.getDronesAll
    }
    console.log('jhony')
    setInterval(async () => {
      if (this.getDecisionFilterSearch === false) {
        try {
          const decision = FilterDrones.filterPaginationDrone(this.dronesAll, this.currentPage, 20)
          if (this.drones === decision.drones) {
            this.actionGetDronesPagination({
              dronesPagination: this.drones,
              page: this.currentPage,
              drones: this.dronesAll,
            })
          } else {
            const response = await axios.get(
              `http://services.solucx.com.br/mock/drones?_page=${this.currentPage}&_limit=20&_sort=id&_order=asc`
            )
            this.actionGetDronesPagination({
              dronesPagination: response.data,
              page: this.currentPage,
              drones: this.dronesAll,
            })
            this.drones = this.getDronesFilterPagination
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        this.drones = this.getDronesFilterSearch
        console.log('drones filter:')
        console.log(this.drones)
      }
    }, 1000)

    return this.drones
  }

  get rows() {
    return this.dronesAll.length
  }

  @drone.Getter
  public getDronesAll!: Array<object>

  @drone.Getter
  public getDronesFilterSearch!: Array<object>

  @drone.Getter
  public getDronesFilterPagination!: Array<object>

  @drone.Getter
  public getDecisionFilterSearch!: boolean

  @drone.Action
  public actionDrones!: (drones: Array<object>) => void

  @drone.Action
  public actionGetDronesPagination!: (drones: {
    dronesPagination: object[]
    page: number | undefined
    drones: object[]
  }) => void

  // eslint-disable-next-line class-methods-use-this
  /* eslint-disable class-methods-use-this */
  async created() {
    await this.paginationGetDrones()
    console.log('pagination decision')
    console.log(this.getDecisionFilterSearch)
    console.log('pagination decision 2')
    console.log(this.decisionPagination)
  }
}
</script>

<style lang="scss">
.table {
  thead {
    height: 40px;
    tr {
      border-bottom: 1px solid black;
      padding: 40px;
      th {
        margin-bottom: 20px;
        padding-top: 10px;
        font-size: 20px;
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid black;
      cursor: pointer;
    }
  }
  .customer {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 90px 110px;
    margin-top: 8px;
    img {
      border-radius: 100%;
      width: 50px;
      height: 50px;
      grid-row: 1 / 3;
      background-color: rgb(199, 198, 198);
    }
    h2 {
      font-size: 32px;
      width: 100%;
    }
    p {
      font-size: 12px;
      width: 100%;
    }
  }
  .drone-id {
    font-size: 24px;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    top: 50%;
    transform: translateY(-70%);
  }
  .batteries {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    top: 0%;
    transform: translateY(-210%);
    &-content {
      background-color: rgb(229, 226, 226);
      width: 100%;
      border-radius: 50%;
      /* top-left | top-right | bottom-right | bottom-left */
      border-radius: 20px 20px 20px 20px;
      &__percent {
        /* top-left | top-right | bottom-right | bottom-left */
        border-radius: 20px 0px 0px 20px;

        height: 7px;
      }
    }
  }
  .max-speed-and-average-speed {
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    p {
      font-size: 30px;
      .max-speed-and-average-speed__after-point {
        font-size: 20px;
        margin-left: -3.5px;
      }
      .max-speed-and-average-speed__unito-of-measurement {
        font-size: 16px;
        margin-left: 4px;
      }
    }
  }
}
.color-red {
  background-color: red;
}
.color-yellow {
  background-color: rgb(255, 166, 1);
}
.color-green {
  background-color: rgb(8, 175, 8);
}
[data-tooltip]:before {
  position: absolute;
  top: -45px;
  font-size: 12px;
  content: attr(data-tooltip);
  opacity: 0;
  background-color: rgb(37, 37, 37);
  color: white;
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 10%;
  z-index: 99;
}
[data-tooltip]:after {
  content: '▼';
  opacity: 0;
  position: absolute;
  top: -15px;
  font-size: 18px;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  opacity: 1;
}
.fly {
  display: grid;
  color: rgb(99, 98, 98);
  position: relative;
  top: 50% !important;
  transform: translateY(-70%) !important;
  &-wrapper {
    width: 100%;
    grid-template-columns: 12px 180px 12px;
  }
  p {
    margin-top: 1.5px;
    position: absolute;
    top: 1px;
  }
  .arrow-right {
    left: 128px;
  }
  label {
    input {
      height: 7px;
    }
  }
}
.hr {
  position: relative;
  top: 50% !important;
  transform: translateY(90%) !important;
  hr {
    border: none;
    border-top: 5px black dashed;
    color: #fff;
    background-color: white;
    height: 2px;
    width: 90%;
  }
}
.table-status-drone {
  width: 100%;
  display: grid;
  justify-items: center;
  top: 50% !important;
  transform: translateY(-28%) !important;
  font-size: 18px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
  position: relative;
  top: 50% !important;
  transform: translateY(-45%) !important;
}
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
.height-100vh {
  width: 100%;
  min-height: 100vh;
}
</style>
