<template>
  <section class="bl-contact1">
    <div class="ln-container">
      <h2 class="ln-base-title-lg-bold">Контакты</h2>
      <div class="bl-contact1-intro" v-html="fields.text"></div>

      <div class="bl-contact1-row">
        <div class="bl-contact1-item" v-if="phones.length > 0">
          <div class="bl-contact1-icon">
            <img src="/storage/static/phone.svg" alt="">
          </div>
          <div class="bl-contact1-text">
              <template v-for="phone in phones">
                  {{ phone }} <br>
              </template>
          </div>
        </div>
        <div class="bl-contact1-item" v-if="emails.length > 0">
          <div class="bl-contact1-icon">
            <img src="/storage/static/email.svg" alt="">
          </div>
          <div class="bl-contact1-text">
            <template v-for="email in emails">
                {{ email }} <br>
            </template>
          </div>
        </div>

        <template v-for="(group,name) in contacts">
          <template v-if="name == 'Социальные сети'">
            <div class="bl-contact1-item">
              <div class="bl-contact1-icon">
                <img src="/storage/static/social.svg" alt="">
              </div>
              <div class="bl-contact1-text">
                <template v-if="group.length > 3">
                  <div class="bl-contact1-dd">
                    <div class="bl-contact1-dd-cursor">
                      <span>Соцсети</span>
                      <svg class="ln-icon"><use xlink:href="/storage/static/icons.svg#botton-arrow"></use></svg>
                    </div>
                    <ul class="bl-contact1-dd-list">
                      <li v-for="contact in group">
                        <a :href="contact.value" target="_blank">{{ contact.contact_type }}</a>
                      </lI>
                    </ul>
                  </div>
                </template>
                <template v-else>
                  <template v-for="contact in group">
                    <a :href="contact.value" target="_blank">{{ contact.contact_type }}</a>
                  </template>
                </template>
              </div>
            </div>
          </template>
        </template>


        <div class="bl-contact1-item" v-if="sites.length > 0">
          <div class="bl-contact1-icon">
            <img src="/storage/static/site.svg" alt="">
          </div>
          <div class="bl-contact1-text">
            <template v-for="site in sites">
                <a :href="site">Сайт</a> <br>
            </template>
          </div>
        </div>
      </div>

      <!--<div class="bl-empty-text" v-else>
        Не создано ни одного контакта.<br>
        Добавить контакт вы можете в <a href="/account/contact" target="_blank">личном кабинете</a>
      </div>-->


      <div class="bl-contact1-arddess" v-if="addresses.length > 0">
        <div class="bl-contact1-address-row" v-for="address in addresses">
          <div class="bl-contact1-address-info">
            <div class="bl-contact1-address-section">
              <div class="bl-contact1-address-title">Адрес</div>
              <div class="bl-contact1-address-text" v-html="address.address"></div>
            </div>

            <div class="bl-contact1-address-section" v-if="address.description">
              <div class="bl-contact1-address-title">Информация</div>
              <div class="bl-contact1-address-text" v-html="address.description">
              </div>
            </div>
          </div>
          <div class="bl-contact1-address-map">
            <base-map
              :coords="[[address.lat, address.lon]]"
              :height="350"
            ></base-map>
          </div>
        </div>
      </div>

      <div class="bl-empty-text" v-else>
        Не создано ни одного адреса.<br>
        Добавить адрес вы можете в <a href="/account/branch" target="_blank">личном кабинете</a>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    props: {
      fields: {
        type: Object,
        default: null
      },
      data: {
        type: Object,
        default: null
      },
    },
    data: function () {
      return {
        contacts: this.data.contacts,
        addresses: this.data.addresses,
        phones: [],
        emails: [],
        sites: [],
      }
    },
    mounted() {
      Object.entries(this.contacts).forEach(function(group, index){
          group[1].forEach(function(item) {
            if(item.contact_type == 'phone') {
              this.phones.push(item.value);
            }
            if(item.contact_type == 'email') {
              this.emails.push(item.value);
            }
            if(item.contact_type == 'website') {
              this.sites.push(item.value);
            }
          }, this)
      }, this);
    }
  }
</script>
