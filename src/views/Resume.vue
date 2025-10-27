<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
import SectionDetails from '@/components/SectionDetails.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="tableOfContent">
  <ul>
    <li><a href="#section1">Job Experience</a></li>
    <li><a href="#section2">Skills</a></li>
    <li><a href="#section3">Education</a></li>
    <li><a href="#section4">Courses</a></li>
    <li><a href="#section5">Involvement</a></li>
  </ul>
  <div class="content">
  <WelcomeItem id="section1">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Job Experience</template>  
    <SectionDetails>
      <template #heading>
        <div style="display: flex; justify-content: space-between; ">
          <div style="align-items: left;">Samsung Austin Semiconductor</div>
          <div style="align-items: center;">Engineer 1</div>
          <div style="align-items: right;">February 2023 - Current</div>
        </div>
      </template>
      <template #detailsLabel>Details</template>
      <template #details>
        <ul>
          <li>application to improve visibility on status of lone sworkers</li>
          <li>Push DevOps principles such as teaching Git and version control to team members.</li>
          <li>Established a standard branch merge scheme for all department/team projects</li>
          <li>Created Develop SQL databases to manage and store department data. </li>
          <li>Develop cloud applications and reports to collect, analyze, and present data to aid the engineering team in fab support.</li>
          <li>Developed application to facilitate shift passdown and morning status reports.  </li>
          <li>Aid in systems administration of ticket systems server (CentOS).</li>
        </ul>
      </template>
    </SectionDetails>
    

  </WelcomeItem>

  <WelcomeItem id="section2">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Skills</template> 
      <!-- <template #heading>
        <div style="display: flex; justify-content: space-between; ">
          <div style="align-items: left;">Samsung Austin Semiconductor</div>
          <div style="align-items: right;">Engineer 1</div>
        </div>
      </template> -->
        <div style="display: grid;  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;">
          <div>
          <details>
            <summary><img class="skillLogo" src="@/assets/logo.svg">VueJS</summary>
          </details>
          <div class="detailsContent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
          
          <div>
          <details>
            <summary><img class="skillLogo" src="@/assets/logo.svg">VueJS</summary>
          </details>
          <div class="detailsContent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
        </div> 

  </WelcomeItem>

  <WelcomeItem id="section3">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Education</template>
  </WelcomeItem>

  <WelcomeItem id="section4">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Courses</template>
  </WelcomeItem>

  <WelcomeItem id="section5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Involvement</template>
  </WelcomeItem>
  </div>
  </div>
</template>
<style scoped>
  .skillLogo{
    height: 25px;
    width: 25px;
  }
  
  .tableOfContent {
    display: grid;
    grid-template-columns: 1fr 9fr;
    /* padding: 0 2rem; */
  }
  .content{
    padding-right: 10px;
    overflow: scroll; 
    max-height: inherit; 
    max-width: inherit;
    overscroll-behavior-x: contain;
    scrollbar-gutter: auto;
    scrollbar-color: gray;
    scrollbar-width: thin;
    scroll-behavior: smooth;  
    padding-bottom: 1rem;
    scroll-padding: 100px;
  }
 details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details[open] + div.detailsContent {
  max-height: 800px; /* Set a max-height value enough to show all the content */
  border-color: #888;
  transition: max-height 400ms ease-out, border 0ms linear;
}

details[open] span::before {
  rotate: 90deg;
  transition: rotate 200ms ease-out;
}

  div.detailsContent {
      box-sizing: border-box;
      max-width: 500px;
      max-height: 0;
      overflow: hidden;
      padding: 0 10px;
      border: 2px solid transparent;
      transition: max-height 400ms ease-out, border 0ms 400ms linear;
    }

</style>