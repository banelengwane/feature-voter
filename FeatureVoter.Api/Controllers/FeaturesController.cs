using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FeatureVoter.Api.Data;
using FeatureVoter.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FeatureVoter.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeaturesController : ControllerBase
    {  
       private readonly AppDbContext _context;

       public FeaturesController(AppDbContext context)
        {
            _context = context;
        } 

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FeatureRequest>>> GetFeatures()
        {
            return await _context.FeatureRequests.OrderByDescending(f => f.Upvotes).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<FeatureRequest>> CreateFeature(FeatureRequest feature)
        {
            feature.CreatedAt = DateTime.UtcNow;
            _context.FeatureRequests.Add(feature);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFeatures), new { id = feature.Id}, feature);
        }

        [HttpPost("{id}/upvote")]
        public async Task<IActionResult> UpvoteFeature(int id)
        {
            var feature = await _context.FeatureRequests.FindAsync(id);
            if (feature == null) return NotFound();

            feature.Upvotes += 1;
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}