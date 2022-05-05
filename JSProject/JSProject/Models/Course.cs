using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JSProject.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string TeacherId { get; set; }
        public double Price { get; set; }
        public int LimitOpenDay { get; set; }

        // relation
        public ICollection<CourseMaterialsToCourses> Materials { get; set; }
        public ICollection<CoursesToUsers> Users { get; set; }
    
        public ApplicationUser Teacher { get; set; }

    }
}
