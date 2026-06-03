using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeatureVoter.Api.Models
{
    public class FeatureRequest
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Upvotes { get; set; } = 0;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}