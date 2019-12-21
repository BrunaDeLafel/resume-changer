<template>
    <div class="container">
        <div class="container1" id="pdfDom">
            <div class="header">
                <div class="title">
                    个人简历
                </div>
                <div class="header-info">
                    <div style="font-size:36rem;font-weight:400;margin-top:4rem;margin-bottom:7rem;">{{title}}</div>
                    <div style="font-size:22rem;text-align:left;">
                        <div class="header-info-text">姓名：{{name}}</div>
                        <div class="header-info-text" style="display:inline-block;">年龄：{{age}}岁 </div><div style="display:inline-block;">毕业年份：{{gyear}}</div>
                        <div class="header-info-text">性别：{{sex}}</div>
                        <div class="header-info-text" style="display:inline-block;">学历：{{college}} · {{major}}</div><div style="display:inline-block;">成绩：前{{grade}}%</div>
                    </div>
                </div>
                <div class="phone">
                    <el-image style="width:22rem;height:22rem;border-radius:1rem;"></el-image>
                    <div class="phonetext"><i class="el-icon-phone"></i><span> 手机：{{phonenumber}}</span></div>
                    <div class="phonetext"><i class="el-icon-s-promotion"></i><span> 邮箱：{{email}}</span></div>
                </div>
            </div>
            <div class="ability">
                <div class="navtitle">专业能力</div>
                <ol>
                    <li  v-for="item in ability">{{item.content}}</li>
                </ol>
            </div>
            <div class="prize">
                <div class="navtitle">获奖经历</div>
                <ol>
                    <li v-for="item in prize">{{item.content}}</li>
                </ol>
            </div>
            <div class="practice">
                <div class="navtitle">项目经历</div>
                <ul>
                    <li v-for="item in practice"><span style="font-weight:600">{{item.title}}：</span>{{item.content}}</li>
                </ul>
            </div>
        </div>
        <div class="submitbutton" v-on:click="getPdf()">导出为pdf</div>
    </div>
</template>

<script>
export default {
    name:'resume',
    data(){
        return{
            title:'',
            name:'',
            age:'',
            gyear:'',
            sex:'',
            college:'',
            major:'',
            grade:'',
            phonenumber:'',
            email:'',
            ability:[
                {content:''}
            ],
            prize:[
                {content:''}
            ],
            practice:[
                {content:'',title:''}
            ],
            htmlTitle: '个人简历'
        }
    },
    beforeMount(){
        let userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
        let ability = JSON.parse(window.localStorage.getItem('ability'));
        let prize = JSON.parse(window.localStorage.getItem('prize'));
        let practice = JSON.parse(window.localStorage.getItem('practice'));
        this.title = userinfo.title;
        this.age = userinfo.age;
        this.name = userinfo.name;
        this.gyear = userinfo.gyear;
        this.college = userinfo.college;
        this.major = userinfo.major;
        this.email = userinfo.email;
        this.sex = userinfo.sex;
        this.grade = userinfo.grade;
        this.phonenumber = userinfo.phonenumber;
        this.ability = ability;
        this.prize = prize;
        this.practice = practice;
    },
}
</script>

<style scoped>
.container1{
    width: 145rem;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    padding-bottom: 6rem;
}
.header{
    display: flex;
    justify-content: space-between;
    width:100%;
    border-bottom: 1px rgb(221, 221, 221) solid;
    padding-bottom: 3rem;
}
.header-info{
    color: rgb(0, 115, 202);
}
.title{
    color: rgb(0, 115, 202);
    font-size: 68rem;
    padding-top: 10rem;
    padding-left: 4rem;
}
.phone{
    text-align: left;
    padding-top: 2rem;
    margin-right: 2.2rem;
}
.phonetext{
    margin-top: 2rem;
    font-size:15px;color:gray;
}
.navtitle{
    color: rgb(0, 115, 202);
    font-size: 28rem;font-weight: 500;
    margin-top: 2rem;
    position: relative;
    transform: translateX(-42%);
}
.header-info-text{
    margin-top: 1.2rem;
    margin-right: 4rem;
}
.ability{
    width:100%;
    border-bottom: 1px rgb(221, 221, 221) solid;
    padding-bottom: 3rem;
}
.prize{
    width:100%;
    border-bottom: 1px rgb(221, 221, 221) solid;
    padding-bottom: 3rem;
}
ul,ol{
    font-size:27rem;width:82%;text-align:left;margin:0 auto;
}
ol li{
    margin-top: 3rem;
    line-height: 5rem;
}
ul li{
    margin-top: 4rem;
    line-height: 5.5rem;
    letter-spacing: 0.1rem;
}
.submitbutton{
    width:25rem;height:10rem;
    background-color:rgb(0, 115, 202);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30rem;
    margin: 0 auto;
    margin-top: 5rem;
    border-radius: 5rem;
    cursor: pointer;
}
</style>