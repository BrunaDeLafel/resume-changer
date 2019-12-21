<template>
  <el-container style="padding-bottom: 3rem;background-color: white;">
      <el-aside style="padding-right: 2rem;padding-left: 2rem;padding-bottom: 3rem;padding-top:5rem;background-color:rgb(248, 248, 248);border-right: 1px rgb(221, 221, 221) solid;">
        <el-steps style="height:140rem;" direction="vertical" :active="stepnumber">
          <el-step title="简历标题" icon="el-icon-edit"></el-step>
          <el-step title="专业技能" icon="el-icon-edit"></el-step>
          <el-step title="获奖经历" icon="el-icon-edit"></el-step>
          <el-step title="项目/实践经历" icon="el-icon-edit"></el-step>
        </el-steps>
      </el-aside>
      <!--用户索要填写的表单信息-->
      <el-main style="text-align:left;padding-left:15rem;">
        <el-form :model="userinfo" ref="userinfo" style="width:144rem;margin-bottom:9rem;" :inline="true">
          <el-form-item
          label="姓名"
          prop="name"
          :rules="[
          {required:true,message:'姓名不能为空'},
          ]">
             <el-input type="name" autocomplete="off" style="width:15rem;" v-model="userinfo.name"></el-input>
          </el-form-item>

          <el-form-item
          label="年龄"
          prop="age"
          :rules="[
          {required:true,message:'年龄不能为空'},
          ]">
             <el-input type="age" autocomplete="off" style="width:12rem;" v-model="userinfo.age"></el-input>
          </el-form-item>

          <el-form-item
          label="性别"
          prop="sex"
          :rules="[
          {required:true,message:'性别不能为空'}
          ]">
            <el-select v-model="userinfo.sex">
              <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item
          label="简历标题"
          prop="title"
          :rules="[
          {required:true,message:'简历标题不能为空'},
          ]">
             <el-input placeholder="可填写应聘岗位名称" type="title" autocomplete="off" style="width:78rem;" v-model="userinfo.title">
               <template slot="append">简历</template>
             </el-input>
          </el-form-item>

          <el-form-item
          label="毕业院校"
          prop="college"
          :rules="[
          {required:true,message:'院校不能为空'}
          ]">
             <el-input type="college" autocomplete="off" style="width:45rem;" v-model="userinfo.college">
             </el-input>
          </el-form-item>

          <el-form-item
          label="所学专业"
          prop="major"
          :rules="[
          {required:true,message:'专业不能为空'}
          ]">
             <el-input type="major" autocomplete="off" style="width:32rem;" v-model="userinfo.major">
             </el-input>
          </el-form-item>

          <el-form-item
          label="毕业年份"
          prop="gyear"
          :rules="[
          {required:true,message:'年份不能为空'}
          ]">
             <el-input type="gyear" autocomplete="off" style="width:21rem;" v-model="userinfo.gyear">
               <template slot="append">年</template>
             </el-input>
          </el-form-item>

          <el-form-item
          label="成绩排名"
          prop="grade"
          :rules="[
          {required:true,message:'成绩不能为空'}
          ]">
             <el-input type="gyear" autocomplete="off" style="width:23rem;" v-model="userinfo.grade">
               <template slot="prepend">前</template>
               <template slot="append">%</template>
             </el-input>
          </el-form-item>

          <el-form-item
          label="手机号"
          prop="phonenumber"
          :rules="[
          {required:true,message:'手机号不能为空'},
          ]">
             <el-input type="phonenumber" autocomplete="off" style="width:32rem;" v-model="userinfo.phonenumber"></el-input>
          </el-form-item>

          <el-form-item
          label="邮箱"
          prop="email"
          :rules="[
          {required:true,message:'邮箱不能为空'},
          ]">
             <el-input placeholder="例如：xxxxx.@xxx.com/cn" type="email" autocomplete="off" style="width:32rem;" v-model="userinfo.email"></el-input>
          </el-form-item>

        </el-form>
        <el-form :model="ability" ref="ability" style="width:144rem;margin-bottom:8rem;">
          <el-form-item
              v-for="(content, index) in ability"
              v-bind:key="index"
              :label="'专业技能' + (index + 1)">
              <el-input v-model="content.content" placeholder="请输入内容" type="textarea" maxlength="100" show-word-limit style="width:82rem;margin-right:2rem;" @focus="changeStep(1)"></el-input><el-button type="danger" icon="el-icon-delete" @click.prevent="removeAbility(content)" plain>删除</el-button>
          </el-form-item>

          <el-form-item>
            <el-button @click="addAbility" icon="el-icon-plus" type="primary">新增技能</el-button>
          </el-form-item>
        </el-form>

        <el-form :model="prize" ref="prize" style="width:144rem;margin-bottom:8rem;">
          <el-form-item
              v-for="(content, index) in prize"
              v-bind:key="index"
              :label="'所获奖项' + (index + 1)">
              <el-input v-model="content.content" placeholder="请输入内容" type="textarea" maxlength="100" show-word-limit style="width:82rem;margin-right:2rem;" @focus="changeStep(2)"></el-input><el-button type="danger" icon="el-icon-delete" @click.prevent="removePrize(content)" plain>删除</el-button>
          </el-form-item>

          <el-form-item>
            <el-button @click="addPrize" icon="el-icon-plus" type="primary">新增奖项</el-button>
          </el-form-item>
        </el-form>

        <el-form :model="practice" ref="practice" style="width:144rem;margin-bottom:8rem;">
          <el-form-item
              v-for="(content, index) in practice"
              v-bind:key="index">

              <el-form-item
                  :label="'项目/实践名称' + (index + 1)" style="margin-bottom:1rem;">
                  <el-input v-model="content.title" placeholder="请输入名称" maxlength="12" show-word-limit style="width:22rem;" @focus="changeStep(3)"></el-input>
              </el-form-item>
              <el-form-item
                  :label="'项目/实践经历' + (index + 1)">
                  <el-input v-model="content.content" placeholder="请输入内容" type="textarea" maxlength="100" show-word-limit style="width:82rem;margin-right:2rem;" @focus="changeStep(3)"></el-input><el-button type="danger" icon="el-icon-delete" @click.prevent="removePractice(content)" plain>删除</el-button>
              </el-form-item>

          </el-form-item>

          <el-form-item>
            <el-button @click="addPractice" icon="el-icon-plus" type="primary">新增项目/实践</el-button>
          </el-form-item>
        </el-form>

        <el-form style="width:144rem;">
          <el-button @click="submit" icon="el-icon-upload" type="primary" plain>生成简历</el-button>
        </el-form>
      </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      vrem:0,
      stepnumber:0,
      userinfo:{
        name:'',
        age:'',
        sex:'',
        title:'',
        gyear:'',
        college:'',
        major:'',
        phonenumber:'',
        email:'',
        grade:''
      },
      ability:[
        {content:''}
      ],
      prize:[
        {content:''}
      ],
      practice:[
        {content:'',title:''}
      ],
      options1:[
        {value:'男',label:'男'},
        {value:'女',label:'女'}
      ]
    }
  },
  methods:{
    addAbility(){
      this.ability.push({content:''})
    },
    addPrize(){
      this.prize.push({content:''})
    },
    addPractice(){
      this.practice.push({content:'',title:''})
    },
    removeAbility(item){
      var index = this.ability.indexOf(item);
      if(index !== -1){
        this.ability.splice(index,1)
      }
    },
    removePractice(item){
      var index = this.practice.indexOf(item);
      if(index !== -1){
        this.practice.splice(index,1)
      }
    },
    removePrize(item){
      var index = this.prize.indexOf(item);
      if(index !== -1){
        this.prize.splice(index,1)
      }
    },
    changeStep(number){
      this.stepnumber = number;
    },
    submit(){
      var storage = null;
      storage = window.localStorage;     
      storage.setItem("userinfo",JSON.stringify(this.userinfo));
      storage.setItem("ability",JSON.stringify(this.ability));
      storage.setItem("prize",JSON.stringify(this.prize));
      storage.setItem("practice",JSON.stringify(this.practice));
      this.$router.push('/resume');

      console.log(window.localStorage);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input{
  margin-right:4rem;
}
</style>
