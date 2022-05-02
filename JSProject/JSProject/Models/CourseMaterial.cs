using System.Collections.Generic;

namespace JSProject.Models
{
    public class CourseMaterial
    {
        public CourseMaterialType Type { get; set; }
        public string Content { get; set; }

        // relation
        public ICollection<CourseMaterialsToCourses> Courses { get; set; }
        public int CourseMaterialTypeId { get; set; }
    }
}
