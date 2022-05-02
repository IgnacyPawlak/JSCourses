using System.Collections;
using System.Collections.Generic;

namespace JSProject.DTO
{
    public class CourseDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public string Teacher { get; set; }
        public IEnumerable<CourseMaterialDTO> Materials { get; set; }
    }
}
