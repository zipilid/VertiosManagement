﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular2mercas.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
		public DateTime BirthDate { get; set; }
    }
}