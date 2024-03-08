//Basic Lib Import

const express=require('express');
const  router=require('./src/route/api');
const app= new express();
const rateLimit=require('express-rate-limiter');
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');
