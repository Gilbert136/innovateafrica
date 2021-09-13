using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public string Content { get; set; }

        public int? DocumentId { get; set; }
        public int? ProjectId { get; set; }
        public int? ImplemetationId { get; set; }
        public int? IdeaId { get; set; }
    }
}
