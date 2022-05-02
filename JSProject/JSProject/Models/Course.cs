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
        public string Date { get; set; }
        public string Teacher { get; set; }

        // relation
        public ICollection<CourseMaterialsToCourses> Materials { get; set; }
        public ICollection<CoursesToUsers> Users { get; set; }
    }
}
