<template>
  <div class="container">
    <table class="table table-hover table-responsive">
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
        <tr v-for="item in items" :key="item.key">
          <th scope="row">
            <div class="drone-id">
              <p>{{ item.id }}</p>
            </div>
          </th>
          <td>
            <div class="customer">
              <img :src="item.image" :alt="item.name" />
              <div>
                <h2>{{ item.name }}</h2>
                <p>{{ item.address }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="batteries">
              <div class="batteries-content">
                <div
                  class="batteries-content__percent color-red"
                  v-if="item.battery >= 0 && item.battery <= 15"
                  :style="'width:' + item.battery + '%'"
                ></div>
                <div
                  class="batteries-content__percent color-yellow"
                  v-else-if="item.battery > 15 && item.battery <= 30"
                  :style="'width:' + item.battery + '%'"
                ></div>
                <div
                  class="batteries-content__percent color-green"
                  v-else
                  :style="'width:' + item.battery + '%'"
                ></div>
              </div>
            </div>
          </td>
          <td>
            <div class="max-speed-and-average-speed">
              <p>
                {{ getNumberBeforePoint(item.max_speed) }}.
                <span class="max-speed-and-average-speed__after-point">
                  {{ getNumberAfterPoint(item.max_speed) }}</span
                >
                <span class="max-speed-and-average-speed__unito-of-measurement">m/h</span>
              </p>
            </div>
          </td>
          <td>
            <div class="max-speed-and-average-speed">
              <p>
                {{ getNumberBeforePoint(item.average_speed) }}.
                <span class="max-speed-and-average-speed__after-point">
                  {{ getNumberAfterPoint(item.average_speed) }}</span
                >
                <span class="max-speed-and-average-speed__unito-of-measurement">m/h</span>
              </p>
            </div>
          </td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Conversions } from '../../utils/conversions'

const conversion = new Conversions()

@Component({
  name: 'TableDrones',
})
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class InputsFilters extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public drones: Array<object> = []

  public items = [
    {
      id: 3,
      image: 'https://robohash.org/fugaaperiamofficiis.jpg?size=50x50&set=set1',
      name: 'Gabbie',
      address: '559 Moose Street',
      battery: 15,
      max_speed: 37.7,
      average_speed: 18.7,
      status: 'flying',
      fly: 76,
    },
    {
      id: 4,
      image: 'https://robohash.org/quiavoluptatemillum.jpg?size=50x50&set=set1',
      name: 'Audrie',
      address: '9460 Canary Junction',
      battery: 49,
      max_speed: 19.4,
      average_speed: 19.1,
      status: 'flying',
      fly: 26,
    },
    {
      id: 5,
      image: 'https://robohash.org/liberoperferendissapiente.jpg?size=50x50&set=set1',
      name: 'Doreen',
      address: '62 Rusk Avenue',
      battery: 56,
      max_speed: 35.7,
      average_speed: 22.8,
      status: 'flying',
      fly: 27,
    },
    {
      id: 6,
      image: 'https://robohash.org/quaecumqueid.bmp?size=50x50&set=set1',
      name: 'Gustaf',
      address: '687 Grim Place',
      battery: 70,
      max_speed: 38.7,
      average_speed: 1.6,
      status: 'flying',
      fly: 67,
    },
    {
      id: 7,
      image: 'https://robohash.org/omnisquiamet.jpg?size=50x50&set=set1',
      name: 'Othilie',
      address: '0249 Daystar Park',
      battery: 50,
      max_speed: 12.7,
      average_speed: 10.2,
      status: 'flying',
      fly: 41,
    },
    {
      id: 8,
      image: 'https://robohash.org/quiavoluptasut.png?size=50x50&set=set1',
      name: 'Rosene',
      address: '7016 Shelley Circle',
      battery: 51,
      max_speed: 3.3,
      average_speed: 9.2,
      status: 'charging',
      fly: 35,
    },
    {
      id: 9,
      image: 'https://robohash.org/nonoccaecatitemporibus.bmp?size=50x50&set=set1',
      name: 'Franklin',
      address: '63991 Rigney Point',
      battery: 21,
      max_speed: 40.5,
      average_speed: 5,
      status: 'charging',
      fly: 0,
    },
    {
      id: 10,
      image: 'https://robohash.org/doloresnonsit.bmp?size=50x50&set=set1',
      name: 'Lynel',
      address: '3080 Ludington Alley',
      battery: 73,
      max_speed: 27.3,
      average_speed: 15.7,
      status: 'success',
      fly: 18,
    },
    {
      id: 11,
      image: 'https://robohash.org/adautemenim.bmp?size=50x50&set=set1',
      name: 'Gunar',
      address: '15295 Crowley Lane',
      battery: 86,
      max_speed: 37.5,
      average_speed: 14,
      status: 'flying',
      fly: 66,
    },
    {
      id: 12,
      image: 'https://robohash.org/quisdoloreearum.jpg?size=50x50&set=set1',
      name: 'Kasey',
      address: '064 Delaware Lane',
      battery: 51,
      max_speed: 3.2,
      average_speed: 9.1,
      status: 'repair',
      fly: 43,
    },
    {
      id: 13,
      image: 'https://robohash.org/rationenonpossimus.png?size=50x50&set=set1',
      name: 'Delly',
      address: '6533 Basil Crossing',
      battery: 67,
      max_speed: 25,
      average_speed: 28,
      status: 'flying',
      fly: 91,
    },
    {
      id: 14,
      image: 'https://robohash.org/suscipitvelofficiis.jpg?size=50x50&set=set1',
      name: 'Norma',
      address: '80060 Riverside Drive',
      battery: 16,
      max_speed: 18.9,
      average_speed: 3.6,
      status: 'repair',
      fly: 90,
    },
    {
      id: 15,
      image: 'https://robohash.org/eaeoseligendi.bmp?size=50x50&set=set1',
      name: 'Desiree',
      address: '54569 Jackson Place',
      battery: 79,
      max_speed: 7.9,
      average_speed: 12.1,
      status: 'charging',
      fly: 16,
    },
    {
      id: 16,
      image: 'https://robohash.org/natusmagniut.bmp?size=50x50&set=set1',
      name: 'Martita',
      address: '516 Ridgeway Parkway',
      battery: 75,
      max_speed: 41.1,
      average_speed: 6.8,
      status: 'repair',
      fly: 42,
    },
    {
      id: 17,
      image: 'https://robohash.org/suscipitquiculpa.bmp?size=50x50&set=set1',
      name: 'Ki',
      address: '871 Colorado Avenue',
      battery: 61,
      max_speed: 32.3,
      average_speed: 20.3,
      status: 'offline',
      fly: 65,
    },
    {
      id: 18,
      image: 'https://robohash.org/suntvitaerepellendus.png?size=50x50&set=set1',
      name: 'Adena',
      address: '111 Steensland Court',
      battery: 64,
      max_speed: 44.9,
      average_speed: 9.8,
      status: 'flying',
      fly: 10,
    },
    {
      id: 19,
      image: 'https://robohash.org/doloresutmodi.png?size=50x50&set=set1',
      name: 'Meara',
      address: '525 Badeau Avenue',
      battery: 52,
      max_speed: 10.3,
      average_speed: 12.5,
      status: 'offline',
      fly: 94,
    },
    {
      id: 20,
      image: 'https://robohash.org/nemovoluptatibusqui.png?size=50x50&set=set1',
      name: 'Tanny',
      address: '11593 Mallard Park',
      battery: 92,
      max_speed: 43.1,
      average_speed: 18.8,
      status: 'flying',
      fly: 13,
    },
  ]

  public velocityNumberBeforePoint = null

  public velocityNumberAfterPoint = null

  // eslint-disable-next-line class-methods-use-this
  public getNumberBeforePoint(number: number): number {
    return conversion.VelocityInDroneInNumberInteger(number)
  }

  // eslint-disable-next-line class-methods-use-this
  public getNumberAfterPoint(number: number) {
    return conversion.VelocityInDroneGetNumberAfterPoint(number)
  }
}
</script>

<style lang="scss">
.table {
  margin-top: 40px;
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
    transform: translateY(-200%);
    &-content {
      background-color: rgb(229, 226, 226);
      width: 100%;
      border: 1px solid;
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
</style>
