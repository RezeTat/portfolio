import Vue from 'vue';
import { createClient } from 'http';
import axios from 'axios';

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
        category: Object,
        skills: Array
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
            skills: [],
            categories: []
        }
    },
    methods: {
        filterSkillsByCategoryId(categoryId) {
            return this.skills.filter(skill => skill.category === categoryId);
        }
    },
    async created() {
        try {
            const response = await axios.get('https://webdev-api.loftschool.com/categories/132');
                this.categories = response.data;
                return response;
        } catch (error) {
            console.log('ошибка добавления категории');
        }
        try {
            const response = await axios.get('https://webdev-api.loftschool.com/skills/132');
                this.skills = response.data;
                return response;
        } catch (error) {
            console.log('ошибка добавления скиллов');
        }
    }
}) 

