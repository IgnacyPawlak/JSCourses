using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JSProject.Models
{
    public class CourseMaterial
    {
        [Key]
        public int Id { get; set; }
        public CourseMaterialType Type { get; set; }
        public string Content { get; set; }

        // relation
        public ICollection<CourseMaterialsToCourses> Courses { get; set; }
        public int CourseMaterialTypeId { get; set; }
    }
}
