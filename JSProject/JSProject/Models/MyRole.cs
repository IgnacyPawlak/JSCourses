using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JSProject.Models
{
    public class MyRole
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }


        //relation
        public ICollection<MyRoleToUser> myRoleToUsers { get; set; }
    }
}
