"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[543],{1543:function(e,a,r){r.r(a);var s=r(885),n=r(5705),t=r(7103),u=r(4142),i=r(6015),o=r(4565),l=r(1833),m=r(7205),c=r(3360),d=r(9176),h=r(2791),p=r(5206),f=r(7689),g=r(8155),Z=r(184),x=t.Ry().shape({username:t.Z_().required("Please, enter your username"),email:t.Z_().email('Correct your email to "mail@mail.com"').required("Please, enter your email"),password:t.Z_().required("Please, enter your password").matches(/^[A-Za-z\d@$!%*#?&]{8,}$/,"Please, enter at least 8 symbols").matches(/^(?=.*[A-Z])[A-Za-z\d@$!%*#?&]{8,}$/,"Please, use at least one capital letter").matches(/^(?=.*\d)(?=.*[0-9])[A-Za-z\d@$!%*#?&]{8,}$/,"Please, enter at least one number")});a.default=function(){var e=(0,d.l4)(),a=(0,s.Z)(e,2),r=a[0],t=a[1],b=(0,f.s0)();(0,h.useEffect)((function(){t.isSuccess&&(p.Am.success("You have successfully registered"),b(g.Z.contacts))}),[t,b]);var v=(0,u.Z)(),w=(0,n.TA)({initialValues:{email:"",password:"",username:""},validationSchema:x,validateOnBlur:!1,onSubmit:function(e){var a=e.email,s=e.username,n=e.password;r({email:a,name:s,password:n}),w.resetForm()}});return(0,Z.jsxs)(i.Z,{component:"form",sx:{display:"flex",flexDirection:"column",margin:"0 auto",gap:v.spacing(1.5),width:"340px"},onSubmit:w.handleSubmit,children:[(0,Z.jsx)(o.Z,{align:"center",variant:"h3",gutterBottom:!0,children:"Sign Up"}),(0,Z.jsx)(l.Z,{fullWidth:!0,error:Boolean(w.touched.username&&w.errors.username),helperText:w.touched.username&&w.errors.username,id:"username",name:"username",type:"username",label:"Username",onChange:w.handleChange,onBlur:w.handleBlur,value:w.values.username}),(0,Z.jsx)(c.Bt,{formik:w}),(0,Z.jsx)(m.Z,{sx:{width:"120px",mx:"auto"},variant:"contained",type:"submit",children:t.isLoading?"Signing up":"Sign up"})]})}}}]);
//# sourceMappingURL=543.bc3d06a1.chunk.js.map