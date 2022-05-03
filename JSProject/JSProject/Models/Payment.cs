using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JSProject.Models
{
    public class Payment
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public int Value { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
