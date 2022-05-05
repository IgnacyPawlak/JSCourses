using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JSProject.Models
{
    public class ApplicationUser : IdentityUser
    {



        // relation
        public ICollection<CoursesToUsers> Courses { get; set; }

        public ICollection<Course> CoursesTeacher { get; set; }

        
    }
}
