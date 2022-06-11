using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RepairAppAPI.Data;
using RepairAppAPI.Models;

namespace RepairAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepairController : ControllerBase
    {
        private readonly DataContext _context;

        public RepairController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Repairs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Repair>>> GetRepairs()
        {
            return await _context.Repairs.ToListAsync();
        }

        // GET: api/Repairs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Repair>> GetRepair(int id)
        {
            var repair = await _context.Repairs.FindAsync(id);

            if (repair == null)
            {
                return NotFound();
            }

            return repair;
        }

        // PUT: api/Repairs/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRepair(int id, Repair repair)
        {
            if (id != repair.Id)
            {
                return BadRequest();
            }

            _context.Entry(repair).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RepairExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Repairs

        [HttpPost]
        public async Task<ActionResult<Repair>> PostRepair(Repair repair)
        {
            _context.Repairs.Add(repair);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepair", new { id = repair.Id }, repair);
        }

        // DELETE: api/Repairs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRepair(int id)
        {
            var repair = await _context.Repairs.FindAsync(id);
            if (repair == null)
            {
                return NotFound();
            }

            _context.Repairs.Remove(repair);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RepairExists(int id)
        {
            return _context.Repairs.Any(e => e.Id == id);
        }
    }
}
