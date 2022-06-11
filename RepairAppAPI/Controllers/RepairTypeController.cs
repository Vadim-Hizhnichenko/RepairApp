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
    public class RepairTypeController : ControllerBase
    {
        private readonly DataContext _context;

        public RepairTypeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/RepairType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RepairType>>> GetRepairTypes()
        {
            return await _context.RepairTypes.ToListAsync();
        }

        // GET: api/RepairType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RepairType>> GetRepairType(int id)
        {
            var repairType = await _context.RepairTypes.FindAsync(id);

            if (repairType == null)
            {
                return NotFound();
            }

            return repairType;
        }

        // PUT: api/RepairType/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRepairType(int id, RepairType repairType)
        {
            if (id != repairType.Id)
            {
                return BadRequest();
            }

            _context.Entry(repairType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RepairTypeExists(id))
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

        // POST: api/RepairType

        [HttpPost]
        public async Task<ActionResult<RepairType>> PostRepairType(RepairType repairType)
        {
            _context.RepairTypes.Add(repairType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepairType", new { id = repairType.Id }, repairType);
        }

        // DELETE: api/RepairType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRepairType(int id)
        {
            var repairType = await _context.RepairTypes.FindAsync(id);
            if (repairType == null)
            {
                return NotFound();
            }

            _context.RepairTypes.Remove(repairType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RepairTypeExists(int id)
        {
            return _context.RepairTypes.Any(e => e.Id == id);
        }
    }
}
