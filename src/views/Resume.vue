<script setup lang="ts">
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
import SectionDetails from '@/components/SectionDetails.vue'
import ItemDetails from '@/components/ItemDetails.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="tableOfContent">
  <ul>
    <li><a href="#section1">Job Experience</a></li>
    <li><a href="#section2">Skills</a></li>
    <li><a href="#section3">Education</a></li>
    <li><a href="#section4">Courses</a></li>
    <!-- <li><a href="#section5">Involvement</a></li> -->
  </ul>
  <div class="content">
  <WelcomeItem id="section1">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Job Experience</template>  
    <SectionDetails>
      <template #heading>
          <div style="align-items: left;">Samsung Austin Semiconductor</div>
      </template>
      <div style="display: flex; justify-content: space-between;">
          <div style="align-items: center;">Engineer 1</div>
          <div style="align-items: right;">Feb 2023 - Current</div>
      </div>
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
    <SectionDetails>
      <template #heading>
          <div style="align-items: left;">X-Fab Texas</div>
      </template>
      <div style="display: flex; justify-content: space-between;">
          <div style="align-items: left;">Intern</div>
          <div style="align-items: right;">May 2022 - Nov 2022</div>
      </div>
      <template #detailsLabel>Details</template>
      <template #details>
        <ul>
          <li>Developed file converter for converting CSV files to binary binary format compatible with internal company software </li>
          <li>Refactor existing code base, to account for OS transition. </li>
        </ul>
      </template>
    </SectionDetails>
    

  </WelcomeItem>

  <WelcomeItem id="section2">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Skills</template> 
        <h3><img class="skillLogo" src="@/assets/Fullstack.svg">Full-stack</h3>
        <hr>
        <div class="detailList">
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Fullstack.svg">Full-stack</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/logo.svg">VueJS</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/HTML5_Badge.svg"><img class="skillLogo" src="@/assets/Official_CSS_Logo.svg">HTML/CSS</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/JavaScript_logo.svg">JavaScript</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Postgresql_elephant.svg">Postgres</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/FastAPI.svg">FastAPI</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Postgresql_elephant.svg">Postgres</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Server.svg">Server</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/TuxFlat.svg">Linux</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/truenas-scale.svg">TrueNAS Scale</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/proxmox-logo-inverted-notext.svg">Proxmox</template>
          </ItemDetails>
        </div>
        
        <h3><img class="skillLogo" src="@/assets/languageIcon.svg">Languages</h3>
        <hr>
        <div class="detailList">
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/python-logo-notext.svg">Python</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Logo_C_sharp.svg">C#</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/The_C_Programming_Language_logo.svg">C</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/java-logo.svg">Java</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/full_colored_light.svg">Bashscript</template>
          </ItemDetails>
        </div>

        <h3><img class="skillLogo" src="@/assets/Toolbox.svg">Tools</h3>
        <hr>
        <div class="detailList">
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/git_logo_color.svg">Git</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/blender_logo_noname.svg">Blender</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/godot_color.svg">Godot</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/unity-original-logo.svg">Unity software</template>
          </ItemDetails>
          <ItemDetails>
            <template #label><img class="skillLogo" src="@/assets/Opengl-logo.svg" style="width: 50px;">OpenGL</template>
          </ItemDetails>
          
        </div>

  </WelcomeItem>

  <WelcomeItem id="section3">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Education</template>
    
    <SectionDetails>
      <template #heading>
        <div>Texas Tech University</div>
        <div>Bachelor of Science in Computer Science <br>Minor in Mathematics </div>
      </template>
      <p>Graduated December 2022 with a GPA of 3.38 </p>
      
    </SectionDetails>
    
  </WelcomeItem>

  <WelcomeItem id="section4">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Courses</template>

    <div class="detailList">
      <ItemDetails>
        <template #label>Data structures</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Data structures</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Software Engineering</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Computer Architecture</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Operating Systems</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Embedded Systems</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Concepts of Programming Languages</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Discrete Computational Structures</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Comp Org/ Assembly Language</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Cyber Physical Systems</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Human Computer Interaction</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Object Orientated Programming</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Design/Analysis of Algorithms</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Modern Digital System Design</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Concepts of Database Systems</template>
      </ItemDetails>
      <ItemDetails>
        <template #label>Intro. to Artificial Intelligence</template>
      </ItemDetails>
    </div>
  </WelcomeItem>

  <!-- <WelcomeItem id="section5">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Involvement</template>
  </WelcomeItem> -->
  </div>
  </div>
</template>
<style scoped>
  .skillLogo{
    height: 25px;
    width: 25px;
    margin-right: 5px;
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
  span.detailButton, span.NoDetail {
      position: relative;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.39);
      color: #ffffffb0;
      height: 4rem;
      padding-left: 1rem;
    }
    span.NoDetail{
      margin-right: 0.1rem;
    }
    span.detailButton::before {
      content: ">";
      font-size: 2rem;
      display: flex;
      align-items: center;
      margin-right: 0.1rem;
      transition: rotate 200ms 400ms ease-out;
    }

    span.detailButton:hover {
      cursor: pointer;
    }
 details > summary {
  list-style: none;
  border: 2px solid transparent;
  border-radius: 1px;
}
summary {
      display: block;
    }
summary::-webkit-details-marker {
  display: none;
}
details[open] + div.detailsContent {
  max-height: 800px; /* Set a max-height value enough to show all the content */
  border-color: rgba(255, 255, 255, 0.39);
  transition: max-height 400ms ease-out, border 0ms linear;
}

details[open] span.detailButton::before {
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
.detailList{
    display: grid;  
    grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;

}

  
@media (min-width: 1024px) {
  .detailList{
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  }
}

</style>