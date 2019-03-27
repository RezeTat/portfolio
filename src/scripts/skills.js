import Vue from 'vue';
import { createClient } from 'http';

const skill = {
    template: "#skill",
    props:{
        skillName: String,
        skillPercent: Number
    },
    mounted(){
        const circle = this.$refs['color-circle'];
        const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
        );
        const percent = (dashArray / 100) * (100 - this.skillPercent);

        createClient.style.strokeDashoffset = percent;
    }
}

const skillsRow = {
    template: "#skills-row",
    components:{
        skill
    },
    props:{
        skill: Object
    }
}

new Vue ({
    el:"#skills-component",
    template:"#skills-list",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: {}
        }
    },
    created(){
        const data = require("../data/skills.json");
        this.skills = data;
    }
})
