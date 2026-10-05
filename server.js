require("dotenv").config();

const express = require("express");
const { Client } = require("@botpress/client");

const app = express();
const PORT = 3000;

const client = new Client({
  token: process.env.BOTPRESS_TOKEN,
  botId: process.env.BOTPRESS_BOT_ID,
  workspaceId: process.env.BOTPRESS_WORKSPACE_ID,
});

// Middleware
app.use(express.static("public"));
app.use(express.json());


// ==========================================
// MENGAMBIL PESANAN
// ==========================================

app.get("/api/orders", async (req, res) => {
  try {
    const { rows } = await client.findTableRows({
      table: "OrdersTable",
      limit: 50,
      offset: 0,
      filter: {},
      orderBy: "id",
      orderDirection: "asc",
    });

    res.json(rows);

  } catch (error) {
    console.error("Gagal mengambil OrdersTable:", error);

    res.status(500).json({
      error: "Gagal mengambil data pesanan",
    });
  }
});


// ==========================================
// MENGUBAH STATUS PESANAN
// ==========================================

app.put("/api/orders/:id/status", async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    const { status } = req.body;

    if (!Number.isInteger(orderId)) {
      return res.status(400).json({
        error: "ID pesanan tidak valid",
      });
    }

    if (!["Confirmed", "Rejected"].includes(status)) {
      return res.status(400).json({
        error: "Status tidak valid",
      });
    }

    const result = await client.updateTableRows({
      table: "OrdersTable",
      rows: [
        {
          id: orderId,
          status: status,
        },
      ],
    });

    res.json({
      message: "Status pesanan berhasil diperbarui",
      result,
    });

  } catch (error) {
    console.error("Gagal mengubah status pesanan:", error);

    res.status(500).json({
      error: "Gagal mengubah status pesanan",
    });
  }
});


// ==========================================
// TES UPDATE PESANAN ID 16
// ==========================================

// ==========================================
// MENJALANKAN SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});