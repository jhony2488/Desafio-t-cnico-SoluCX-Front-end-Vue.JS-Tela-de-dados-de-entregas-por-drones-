<template>
  <section class="onde-drone">
    <div class="onde-drone-wrapper">
      <ImageDrones size="240px" :src="item.image" />
      <h1>{{ item.name }}</h1>
      <p>{{ item.address }}</p>
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
      <div class="max-speed-and-average-speed">
        <p>
          {{
            Number.isInteger(item.average_speed)
              ? item.average_speed
              : String(item.average_speed).split('.')[0]
          }}.<span class="max-speed-and-average-speed__after-point">
            {{
              Number.isInteger(item.average_speed) ? 0 : String(item.average_speed).split('.')[1][0]
            }}</span
          ><span class="max-speed-and-average-speed__unito-of-measurement">m/h</span>
        </p>
      </div>
      <div class="fly">
        <div class="fly-wrapper">
          <label
            :for="'customRange' + item.id"
            v-if="item.status == 'flying' && item.fly > 50"
            :htmlFor="'customRange' + item.id"
            class="form-label"
          >
            going
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
          <label
            :for="'customRange' + item.id"
            v-if="item.status == 'flying' && item.fly <= 50"
            :htmlFor="'customRange' + item.id"
            class="form-label"
          >
            coming
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
          <div class="hr" v-if="item.status != 'flying'">
            <hr />
          </div>
        </div>
      </div>
      <div v-if="item.status == 'repair'" class="table-status-drone color-red">
        <p>{{ item.status }}</p>
      </div>
      <div v-else-if="item.status == 'offline'" class="table-status-drone color-yellow">
        <p>{{ item.status }}</p>
      </div>
      <div v-else class="table-status-drone color-green">
        <p>{{ item.status }}</p>
      </div>
      <div class="return">
        <router-link to="/">Voltar para page Home</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { namespace } from 'vuex-class'
import ImageDrones from '../atoms/ImageDrones.vue'

const drone = namespace('Drone')

interface droneInterface {
  id: number
}

@Component({
  name: 'OneDriveContent',
  components: {
    ImageDrones,
  },
})
export default class OneDriveContent extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public item: object = {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async getDrone(): Promise<void> {
    try {
      // eslint-disable-next-line radix
      const router = parseInt(this.$route.path.replace(/[^0-9]/g, ''))
      console.log(`router${router}`)
      if (this.getdrone) {
        if (this.getdrone.id !== router || this.getdrone.id === undefined) {
          await axios
            .get(`http://services.solucx.com.br/mock${this.$route.path}`)
            .then((res) => {
              // eslint-disable-next-line eqeqeq
              if (res.status != 404) {
                this.item = res.data
                this.actionOneDrone(res.data)
                console.log(this.getdrone)
              } else {
                this.$router.push('/404')
              }
            })
            .catch((err) => {
              console.log(err)
              this.$router.push('/404')
            })
        } else {
          this.item = this.getdrone
        }
      } else {
        console.log('getdroneeee-no-get')
        await axios
          .get(`http://services.solucx.com.br/mock${this.$route.path}`)
          .then((res) => {
            // eslint-disable-next-line eqeqeq
            if (res.status != 404) {
              this.item = res.data
              this.actionOneDrone(res.data)
              console.log('jhoninho')
              console.log(this.getdrone)
            } else {
              this.$router.push('/404')
            }
          })
          .catch((err) => {
            console.log(err)
            this.$router.push('/404')
          })
      }
    } catch (error) {
      console.error(error)
      console.log('jhony-error')
    }
  }

  @drone.Getter
  // eslint-disable-next-line @typescript-eslint/ban-types
  public getdrone!: droneInterface

  @drone.Getter
  // eslint-disable-next-line @typescript-eslint/ban-types
  public getDronesFilterPagination!: Array<object>

  @drone.Getter
  // eslint-disable-next-line @typescript-eslint/ban-types
  public getDronesAll!: Array<object>

  @drone.Action
  // eslint-disable-next-line @typescript-eslint/ban-types
  public actionOneDrone!: (droneOne: object) => void

  @drone.Action
  // eslint-disable-next-line @typescript-eslint/ban-types
  public actionGetDroneWithDrones!: (droneOne: object) => void

  created(): void {
    this.getDrone()
  }
}
</script>

<style scoped lang="scss">
.onde-drone {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  &-wrapper {
    width: 90%;
    max-width: 1440px;
    display: grid;
    justify-items: center;
    grid-gap: 20px;
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
  &-wrapper {
    width: 100%;
    grid-template-columns: 12px 180px 12px;
  }
  p {
    margin-top: 1.5px;
    position: absolute;
    top: 70%;
    right: 53%;
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
</style>
