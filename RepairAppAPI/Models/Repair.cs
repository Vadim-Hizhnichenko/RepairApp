using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RepairAppAPI.Models
{
    public class Repair
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Status { get; set; } = string.Empty;
        [StringLength(250)]
        public string Description { get; set; } = string.Empty;

        public int RepairTypeId { get; set; }
        public RepairType? RepairType { get; set; }

    }
}
