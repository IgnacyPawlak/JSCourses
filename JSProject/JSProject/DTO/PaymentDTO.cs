using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JSProject.DTO
{
    public class PaymentDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public int Value { get; set; }
    }
}
