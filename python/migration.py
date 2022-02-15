import mysql.connector as mysql

def mueveProveedor():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()
    try:
        query = ('''
            select proveedor_cod, proveedor_ruc, proveedor_nom, proveedor_contacto, proveedor_telefono, proveedor_mail from tbl_proveedor
        ''')
        cur.execute(query)
        for proveedor_cod, proveedor_ruc, proveedor_nom, proveedor_contacto, proveedor_telefono, proveedor_mail in cur:
            insert= ("""
                    insert into proveedor (id, ruc, nombre, contacto, telefono, email) values 
                    (""")
            insert = insert + str(proveedor_cod) + ", '" + proveedor_ruc + "', '" + proveedor_nom + "', '"+ proveedor_contacto+"', '"+ proveedor_telefono+"', '"+proveedor_mail+"')"
            cur2.execute(insert)
        db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def mueveObra():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
         query = "select obra_cod, obra_name, obra_casas, obra_activo from tbl_obra"
         cur.execute(query)
         for obra_cod, obra_name, obra_casas, obra_activo in cur:
              insert = "insert into obra (id, nombre, casas, activo) values ("
              insert = insert + str(obra_cod) + ', "' + obra_name + '", ' +str(obra_casas) + ', ' + str(obra_activo) + ")"
              cur2.execute(insert)
         db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def muevePartida():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
         query = "select partida_cod, partida_nom, partida_acum, partida_nivel from tbl_partida"
         cur.execute(query)
         for partida_cod, partida_nom, partida_acum, partida_nivel in cur:
              insert = "insert into partida (codigo, nombre, acumula, nivel) values ("
              insert = insert + "'" + partida_cod + "', '" + partida_nom + "', " +str(partida_acum) + ", " + str(partida_nivel) + ")"
              cur2.execute(insert)
         db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def muevePresupuesto():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
         query = "select obra_cod, partida_cod, presupuesto_cantini, presupuesto_costoini, presupuesto_totalini, presupuesto_rendidocant, presupuesto_rendidotot, presupuesto_porgascan, presupuesto_porgascost, presupuesto_porgastot, presupuesto_presactu from tbl_presupuesto"
         cur.execute(query)
         for obra_cod, partida_cod, presupuesto_cantini, presupusto_costoini, presupuesto_totaliini, presupuesto_rendidocant, presupuesto_rendidotot, presupuesto_porgascan, presupuesto_porgascost, presupuesto_porgastot, presupuesto_presactu in cur:
              sql = "select id cod, acumula from partida where codigo='"+partida_cod+"'"
              cur2.execute(sql)
              for cod, acumula in cur2:
                   if (acumula == 1):
                       sql="insert into presupuesto (obra_id, partida_id, totalini, rendidotot, porgastot, presactu) values ("
                       sql = sql + str(obra_cod) +", " + str(cod) + ", " + str(presupuesto_totaliini) + ", " + str(presupuesto_rendidotot) + ", "  + str(presupuesto_porgastot) + ", " + str(presupuesto_presactu) + ")"
                   else:
                       sql="insert into presupuesto (obra_id, partida_id, cantini, costoini, totalini, rendidocant, rendidotot, porgascan, porgascost, porgastot, presactu) values ("
                       sql = sql + str(obra_cod) +", " + str(cod) + ", " + str(presupuesto_cantini) + ", " + str(presupusto_costoini) + ", " + str(presupuesto_totaliini) + ", " + str(presupuesto_rendidocant) + ", " + str(presupuesto_rendidotot) + ", " + str(presupuesto_porgascan) + ", " + str(presupuesto_porgascost) + ", " + str(presupuesto_porgastot) + ", " + str(presupuesto_presactu) + ")"
                   cur2.execute(sql)
         db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def mueveFactura():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
        sql ="select obra_cod, proveedor_cod, factura_num, factura_fecha, factura_total from tbl_factura"
        cur.execute(sql)
        for obra_cod, proveedor_cod, factura_num, factura_fecha, factura_total in cur:
            sql = "insert into factura (obra_id, proveedor_id, numero, fecha, total) values (%s, %s, %s, %s, %s )"
            cur2.execute(sql, (obra_cod, proveedor_cod, factura_num, factura_fecha, factura_total))
        db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def mueveDetalle():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
        sql ="select obra_cod, proveedor_cod, factura_num, partida_cod, detallefactura_cant, detallefactura_unitario, detallefactura_total from tbl_detallefactura"
        cur.execute(sql)
        for obra_cod, proveedor_cod, factura_num, partida_cod, detallefactura_cant, detallefactura_unitario, detallefactura_total in cur:
            sql = "select  id  from factura where obra_id=%s and proveedor_id=%s and numero=%s"
            cur2.execute(sql, (obra_cod, proveedor_cod, factura_num))
            data = cur2.fetchone()
            factura= data[0]
            sql = "select id from partida where codigo='"+partida_cod+"'"
            cur2.execute(sql)
            data = cur2.fetchone()
            partida= data[0]
            sql = "insert into detalle_factura (factura_id, partida_id, cantidad, unitario, total) values (%s, %s, %s, %s, %s)"
            cur2.execute(sql, (factura, partida, detallefactura_cant, detallefactura_unitario, detallefactura_total))
        db2.commit()
    except mysql.Error as e:
        # Rolling back in case of error
        db2.rollback()
        print ("tbl_proveedor MySQL Error: %s" % str(e))

mueveProveedor()
mueveObra()
muevePartida()
muevePresupuesto()
mueveFactura()
mueveDetalle()