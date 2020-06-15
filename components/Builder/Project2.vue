<template>
  <section class="bl-project1">
    <div class="bl-project1-wrap"  v-if="dataElements.length > 0">
      <agile
        :nav-buttons="false"
        :dots="false"
        :infinite="true"
        ref="blproject1"
        :key="dataElements.length">

        <template v-for="project in dataElements">
      	<div class="slide" v-if="project.is_show">
          <div class="bl-project1-slide">
            <div class="bl-project1-info">
              <div class="bl-project1-info-block">
                <template v-if="project.rubrics.length > 0">
                  <div class="bl-project1-tags" >
                    <template v-for="rubric in project.rubrics">
                        <a :href="'/projects?rubric='+rubric.id" target="_blank" >{{ rubric.slashName }}</a>
                    </template>
                  </div>
                </template>
                <h3 class="bl-project1-title">
                    <a :href="'/projects/'+ project.id">{{ project.name }}</a>
                </h3>
                <div class="bl-project1-area">
                  <div class="bl-project1-text"  v-bar>
                    <div>
                      <div class="bl-project1-scroll" v-html="project.description"></div>
                    </div>
                  </div>
                </div>
                <div class="bl-project1-str"><a :href="'/projects/'+ project.id">{{ project.str_property }}</a></div>
                <a :href="'/projects/'+ project.id" class="bl-project1-link">смотреть проект</a>
              </div>
            </div>
            <div class="bl-project1-image"
              :style="{'background-image':'url(' + project.thumb + ')'}"
            ></div>
          </div>
      	</div>
      </template>
      </agile>

      <div class="bl-project1-nav">
        <div class="bl-project1-btn" @click="$refs.blproject1.goToPrev()">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77495e-05 5.84818C0.00269466 6.06499 0.0896883 6.27226 0.242611 6.42598L5.24261 11.426C5.39914 11.5812 5.61076 11.6681 5.8312 11.6677C6.05164 11.6673 6.26295 11.5797 6.41893 11.4239C6.57491 11.2681 6.66287 11.0569 6.66356 10.8365C6.66425 10.6161 6.57762 10.4043 6.42263 10.2476L2.84515 6.67012L12.492 6.67012C12.6024 6.67168 12.712 6.65128 12.8145 6.6101C12.917 6.56892 13.0102 6.50779 13.0889 6.43025C13.1675 6.35271 13.23 6.26032 13.2726 6.15844C13.3152 6.05656 13.3372 5.94722 13.3372 5.83678C13.3372 5.72635 13.3152 5.61701 13.2726 5.51513C13.23 5.41325 13.1675 5.32086 13.0889 5.24332C13.0102 5.16578 12.917 5.10465 12.8145 5.06347C12.712 5.02229 12.6024 5.00189 12.492 5.00345L2.84515 5.00345L6.42263 1.42598C6.50062 1.34863 6.56257 1.25664 6.60491 1.15528C6.64724 1.05393 6.66914 0.945204 6.66933 0.835361C6.66952 0.725517 6.64801 0.616718 6.60603 0.515213C6.56405 0.413709 6.50243 0.3215 6.4247 0.243882C6.34698 0.166265 6.25468 0.10477 6.15312 0.0629282C6.05156 0.0210876 5.94273 -0.000274658 5.83289 7.05719e-05C5.72304 0.000414848 5.61435 0.02246 5.51305 0.0649376C5.41175 0.107415 5.31985 0.16949 5.24261 0.247593L0.242611 5.24759C0.164153 5.32645 0.102275 5.42022 0.0606243 5.52336C0.0189739 5.62651 -0.00160584 5.73695 9.77495e-05 5.84818Z" fill="black"/>
          </svg>
        </div>
        <div class="bl-project1-btn" @click="$refs.blproject1.goToNext()">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 5.81955C13.9973 5.60274 13.9103 5.39547 13.7574 5.24175L8.75739 0.241749C8.60086 0.0865323 8.38924 -0.000386057 8.1688 1.2891e-06C7.94836 0.000388635 7.73705 0.0880503 7.58107 0.243816C7.42509 0.399581 7.33713 0.610775 7.33644 0.831212C7.33575 1.05165 7.42238 1.26339 7.57737 1.42013L11.1548 4.99761L1.50804 4.99761C1.39761 4.99605 1.28798 5.01645 1.18551 5.05763C1.08303 5.0988 0.989766 5.15994 0.911125 5.23748C0.832484 5.31501 0.770039 5.40741 0.727416 5.50929C0.684793 5.61117 0.662845 5.7205 0.662845 5.83094C0.662845 5.94138 0.684793 6.05071 0.727416 6.15259C0.770039 6.25447 0.832484 6.34687 0.911125 6.42441C0.989766 6.50194 1.08303 6.56308 1.18551 6.60425C1.28798 6.64543 1.39761 6.66583 1.50804 6.66427L11.1548 6.66427L7.57737 10.2417C7.49938 10.3191 7.43743 10.4111 7.39509 10.5124C7.35276 10.6138 7.33086 10.7225 7.33067 10.8324C7.33048 10.9422 7.35199 11.051 7.39397 11.1525C7.43595 11.254 7.49757 11.3462 7.5753 11.4238C7.65302 11.5015 7.74532 11.563 7.84688 11.6048C7.94844 11.6466 8.05727 11.668 8.16711 11.6677C8.27696 11.6673 8.38565 11.6453 8.48695 11.6028C8.58825 11.5603 8.68015 11.4982 8.75739 11.4201L13.7574 6.42013C13.8358 6.34128 13.8977 6.24751 13.9394 6.14436C13.981 6.04122 14.0016 5.93077 13.9999 5.81955Z" fill="black"/>
          </svg>
        </div>
      </div>

    </div>

    <div class="bl-project1-footer" v-if="dataElements.length > 0">
      <a :href="'/company/' + companyAlias + '/projects'" class="ln-btn-default ln-btn-transparent-dark ln-btn-fix-width">Все проекты</a>
    </div>

    <div v-else >
      <div class="bl-empty-text">
        Не создано ни одного проекта.<br>
        Добавить проект вы можете в <a href="/account/project" target="_blank">личном кабинете</a>
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
    companyAlias: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      projects: this.data.projects
    }
  },
  computed: {
    limit() {
      return this.fields.source[0].limit;
    },
    dataElements() {
      return this.projects.slice(0, this.limit);
    }
  },
  mounted() {
  }
}
</script>
