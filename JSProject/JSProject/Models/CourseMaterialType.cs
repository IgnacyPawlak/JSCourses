using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JSProject.Models
{
    public class CourseMaterialType
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        // relation
        ICollection<CourseMaterial> CourscMaterials { get; set; } 
    }
}
