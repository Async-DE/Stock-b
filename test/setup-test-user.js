#!/usr/bin/env node

import prisma from "../prisma/prismaClient.js";
import bcrypt from "bcryptjs";

async function setupTestUser() {
  try {
    const testUser = "testadmin_setup";
    const testPassword = await bcrypt.hash("TestSetup123!", 10);
    
    // Intenta crear el usuario, ignorando si ya existe
    const usuario = await prisma.usuario.upsert({
      where: { usuario: testUser },
      update: {},
      create: {
        nombre: "Test Admin Setup",
        usuario: testUser,
        email_phone: "testadmin@setup.test.com",
        password: testPassword,
        estado: true,
      },
    });

    console.log(`✅ Usuario de prueba listo: ${testUser} / TestSetup123!`);
    console.log(`   ID: ${usuario.id}`);
    console.log(`   Email: ${usuario.email_phone}`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al crear usuario de prueba:", error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

setupTestUser();
