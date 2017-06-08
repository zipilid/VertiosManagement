using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular2mercas.Models
{
    public static class DB
    {
        public static List<User> heroes;

        static DB()
        {
            heroes = new List<User>()
            {
                new User() {Id = 1, BirthDate = DateTime.Now.AddDays(1), Name = "Shlomo Goldberg" },
                new User() {Id = 2, BirthDate = DateTime.Now.AddDays(100), Name = "Shalom Peles" },
                new User() {Id = 3, BirthDate = DateTime.Now.AddDays(200), Name = "Noam Shefer" },
                new User() {Id = 4, BirthDate = DateTime.Now.AddDays(100), Name = "Tomer Kisar" },
            };
        }

    }
}