describe('pruebas de la pagina todo', () => {
  
//crear tarea
    it('comprobar que se pueda crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("sacar el perro{enter}")
  })

//filtro tick a la tarea
it('comprobar que se pueda tachar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("patinar con wally{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
})

//filtro desmarcar tarea
it('comprobar que se pueda desmarcar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("patinar con wally{enter}")
    cy.get('[data-testid="todo-item-toggle"]').dblclick()
    
})

//renombrar tarea
it('comprobar que se pueda editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("patinar con wally{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').last().clear().type("cenar pizza")

})

//eliminar tarea de la lista
it('comprobar que se pueda eliminar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("patinar con wally{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').last().clear().type("cenar pizza")
    cy.get('[data-testid="text-input"]').last().clear()
})

//filtros de tarea completadas y no completadas
it('comprobar los filtros de tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  
//mostrar multiples tareas
    cy.get('[data-testid="text-input"]').type("ir a la playa{enter}")
    cy.get('[data-testid="text-input"]').type("ver pelicula{enter}")
    cy.get('[data-testid="text-input"]').type("beber agua{enter}")
    cy.get('[data-testid="text-input"]').type("ver futbol malaga{enter}")
    cy.get('[data-testid="text-input"]').type("hacer los deberes{enter}")

//mostrar tareas con tick
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(5) > .view > [data-testid="todo-item-toggle"]').click()

//mostrar solo las tareas completadas
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()

//mostrar solo las tareas no completadas
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()

//mostrar todas las tareas en el panel
    cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()

//mostrar limpieza de tareas completadas y muestre las no completadas
    cy.get('.clear-completed').click()

})
})